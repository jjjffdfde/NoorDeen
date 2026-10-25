const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');
const { execSync } = require('child_process');

// ==========================================
// 1. AXML (Android Binary XML) GENERATOR
// ==========================================
class AxmlBuilder {
  constructor() {
    this.strings = [];
    this.stringMap = new Map();
    this.resourceIds = [];
  }

  addString(str, resId = null) {
    if (this.stringMap.has(str)) {
      const idx = this.stringMap.get(str);
      if (resId !== null && this.resourceIds[idx] === 0) {
        this.resourceIds[idx] = resId;
      }
      return idx;
    }
    const idx = this.strings.length;
    this.strings.push(str);
    this.stringMap.set(str, idx);
    this.resourceIds.push(resId !== null ? resId : 0);
    return idx;
  }

  buildStringPool() {
    const count = this.strings.length;
    const offsets = [];
    const stringBuffers = [];
    let currentOffset = 0;

    for (let i = 0; i < count; i++) {
      offsets.push(currentOffset);
      const str = this.strings[i];
      const utf8 = Buffer.from(str, 'utf8');
      const utf16Len = str.length;
      const utf8Len = utf8.length;

      const header = [];
      if (utf16Len < 0x80) header.push(utf16Len);
      else header.push(0x80 | (utf16Len >>> 8), utf16Len & 0xff);

      if (utf8Len < 0x80) header.push(utf8Len);
      else header.push(0x80 | (utf8Len >>> 8), utf8Len & 0xff);

      const strBuf = Buffer.concat([Buffer.from(header), utf8, Buffer.from([0])]);
      stringBuffers.push(strBuf);
      currentOffset += strBuf.length;
    }

    const stringData = Buffer.concat(stringBuffers);
    const padLen = (4 - (stringData.length % 4)) % 4;
    const paddedStringData = Buffer.concat([stringData, Buffer.alloc(padLen)]);

    const offsetsSize = count * 4;
    const headerSize = 28;
    const stringsStart = headerSize + offsetsSize;
    const totalSize = stringsStart + paddedStringData.length;

    const poolBuf = Buffer.alloc(totalSize);
    poolBuf.writeUInt16LE(0x0001, 0); // RES_STRING_POOL_TYPE
    poolBuf.writeUInt16LE(headerSize, 2);
    poolBuf.writeUInt32LE(totalSize, 4);
    poolBuf.writeUInt32LE(count, 8);
    poolBuf.writeUInt32LE(0, 12);
    poolBuf.writeUInt32LE(0x00000100, 16); // UTF-8 flag
    poolBuf.writeUInt32LE(stringsStart, 20);
    poolBuf.writeUInt32LE(0, 24);

    for (let i = 0; i < count; i++) {
      poolBuf.writeUInt32LE(offsets[i], headerSize + i * 4);
    }
    paddedStringData.copy(poolBuf, stringsStart);
    return poolBuf;
  }

  buildResourceMap(attrCount) {
    const totalSize = 8 + attrCount * 4;
    const buf = Buffer.alloc(totalSize);
    buf.writeUInt16LE(0x0180, 0); // RES_XML_RESOURCE_MAP_TYPE
    buf.writeUInt16LE(8, 2);
    buf.writeUInt32LE(totalSize, 4);
    for (let i = 0; i < attrCount; i++) {
      buf.writeUInt32LE(this.resourceIds[i] || 0, 8 + i * 4);
    }
    return buf;
  }

  buildNode(type, size, line, writePayload) {
    const buf = Buffer.alloc(size);
    buf.writeUInt16LE(type, 0);
    buf.writeUInt16LE(0x0010, 2);
    buf.writeUInt32LE(size, 4);
    buf.writeUInt32LE(line, 8);
    buf.writeUInt32LE(0xffffffff, 12);
    if (writePayload) writePayload(buf, 16);
    return buf;
  }

  buildElementStart(nameIdx, nsIdx, attrs, line) {
    const size = 16 + 20 + attrs.length * 20;
    const buf = Buffer.alloc(size);
    buf.writeUInt16LE(0x0102, 0); // RES_XML_START_ELEMENT_TYPE
    buf.writeUInt16LE(16, 2);
    buf.writeUInt32LE(size, 4);
    buf.writeUInt32LE(line, 8);
    buf.writeUInt32LE(0xffffffff, 12);

    buf.writeUInt32LE(nsIdx, 16);
    buf.writeUInt32LE(nameIdx, 20);
    buf.writeUInt16LE(0x0014, 24);
    buf.writeUInt16LE(0x0014, 26);
    buf.writeUInt16LE(attrs.length, 28);
    buf.writeUInt16LE(0, 30);
    buf.writeUInt16LE(0, 32);
    buf.writeUInt16LE(0, 34);

    let attrOff = 36;
    for (const a of attrs) {
      buf.writeUInt32LE(a.ns, attrOff);
      buf.writeUInt32LE(a.name, attrOff + 4);
      buf.writeUInt32LE(a.raw, attrOff + 8);
      buf.writeUInt16LE(8, attrOff + 12);
      buf.writeUInt8(0, attrOff + 14);
      buf.writeUInt8(a.type, attrOff + 15);
      buf.writeUInt32LE(a.data, attrOff + 16);
      attrOff += 20;
    }
    return buf;
  }

  buildElementEnd(nameIdx, nsIdx, line) {
    const size = 24;
    const buf = Buffer.alloc(size);
    buf.writeUInt16LE(0x0103, 0); // RES_XML_END_ELEMENT_TYPE
    buf.writeUInt16LE(16, 2);
    buf.writeUInt32LE(size, 4);
    buf.writeUInt32LE(line, 8);
    buf.writeUInt32LE(0xffffffff, 12);
    buf.writeUInt32LE(nsIdx, 16);
    buf.writeUInt32LE(nameIdx, 20);
    return buf;
  }

  buildManifest() {
    const ATTR_NAME = 0x01010003;
    const ATTR_LABEL = 0x01010001;
    const ATTR_ICON = 0x01010002;
    const ATTR_THEME = 0x01010000;
    const ATTR_EXPORTED = 0x0101001b;
    const ATTR_LAUNCH_MODE = 0x0101001d;
    const ATTR_MIN_SDK = 0x0101020c;
    const ATTR_TARGET_SDK = 0x01010270;
    const ATTR_VERSION_CODE = 0x0101021b;
    const ATTR_VERSION_NAME = 0x0101021c;

    const attrNames = [
      { name: "theme", resId: ATTR_THEME },
      { name: "label", resId: ATTR_LABEL },
      { name: "icon", resId: ATTR_ICON },
      { name: "name", resId: ATTR_NAME },
      { name: "exported", resId: ATTR_EXPORTED },
      { name: "launchMode", resId: ATTR_LAUNCH_MODE },
      { name: "minSdkVersion", resId: ATTR_MIN_SDK },
      { name: "targetSdkVersion", resId: ATTR_TARGET_SDK },
      { name: "versionCode", resId: ATTR_VERSION_CODE },
      { name: "versionName", resId: ATTR_VERSION_NAME }
    ];

    attrNames.forEach(a => this.addString(a.name, a.resId));
    const attrCount = attrNames.length;

    const s_package = this.addString("package");
    const s_android = this.addString("android");
    const s_ns_android = this.addString("http://schemas.android.com/apk/res/android");
    const s_manifest = this.addString("manifest");
    const s_uses_sdk = this.addString("uses-sdk");
    const s_uses_permission = this.addString("uses-permission");
    const s_application = this.addString("application");
    const s_activity = this.addString("activity");
    const s_intent_filter = this.addString("intent-filter");
    const s_action = this.addString("action");
    const s_category = this.addString("category");

    const v_pkg = this.addString("com.islamicknowledge.portal");
    const v_versionName = this.addString("1.2.0");
    const v_perm_net = this.addString("android.permission.INTERNET");
    const v_perm_state = this.addString("android.permission.ACCESS_NETWORK_STATE");
    const v_main_act = this.addString("com.islamicknowledge.portal.MainActivity");
    const v_action_main = this.addString("android.intent.action.MAIN");
    const v_cat_launcher = this.addString("android.intent.category.LAUNCHER");
    const v_app_label = this.addString("NoorDeen");

    const nodes = [];

    // START_NAMESPACE
    nodes.push(this.buildNode(0x0100, 24, 1, (b, off) => {
      b.writeUInt32LE(s_android, off);
      b.writeUInt32LE(s_ns_android, off + 4);
    }));

    // <manifest package="com.islamicknowledge.portal" android:versionCode=10200 android:versionName="1.2.0">
    const manifestAttrs = [
      { ns: 0xffffffff, name: s_package, raw: v_pkg, type: 0x03, data: v_pkg },
      { ns: s_ns_android, name: this.stringMap.get("versionCode"), raw: 0xffffffff, type: 0x10, data: 10200 },
      { ns: s_ns_android, name: this.stringMap.get("versionName"), raw: v_versionName, type: 0x03, data: v_versionName }
    ];
    nodes.push(this.buildElementStart(s_manifest, 0xffffffff, manifestAttrs, 2));

    // <uses-sdk android:minSdkVersion="22" android:targetSdkVersion="34"/>
    const sdkAttrs = [
      { ns: s_ns_android, name: this.stringMap.get("minSdkVersion"), raw: 0xffffffff, type: 0x10, data: 22 },
      { ns: s_ns_android, name: this.stringMap.get("targetSdkVersion"), raw: 0xffffffff, type: 0x10, data: 34 }
    ];
    nodes.push(this.buildElementStart(s_uses_sdk, 0xffffffff, sdkAttrs, 3));
    nodes.push(this.buildElementEnd(s_uses_sdk, 0xffffffff, 3));

    // <uses-permission android:name="android.permission.INTERNET"/>
    const permNetAttrs = [
      { ns: s_ns_android, name: this.stringMap.get("name"), raw: v_perm_net, type: 0x03, data: v_perm_net }
    ];
    nodes.push(this.buildElementStart(s_uses_permission, 0xffffffff, permNetAttrs, 4));
    nodes.push(this.buildElementEnd(s_uses_permission, 0xffffffff, 4));

    // <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    const permStateAttrs = [
      { ns: s_ns_android, name: this.stringMap.get("name"), raw: v_perm_state, type: 0x03, data: v_perm_state }
    ];
    nodes.push(this.buildElementStart(s_uses_permission, 0xffffffff, permStateAttrs, 5));
    nodes.push(this.buildElementEnd(s_uses_permission, 0xffffffff, 5));

    // <application android:label="NoorDeen">
    const appAttrs = [
      { ns: s_ns_android, name: this.stringMap.get("label"), raw: v_app_label, type: 0x03, data: v_app_label }
    ];
    nodes.push(this.buildElementStart(s_application, 0xffffffff, appAttrs, 6));

    // <activity android:name="com.islamicknowledge.portal.MainActivity" android:label="NoorDeen" android:exported="true" android:launchMode="2">
    const actAttrs = [
      { ns: s_ns_android, name: this.stringMap.get("name"), raw: v_main_act, type: 0x03, data: v_main_act },
      { ns: s_ns_android, name: this.stringMap.get("label"), raw: v_app_label, type: 0x03, data: v_app_label },
      { ns: s_ns_android, name: this.stringMap.get("exported"), raw: 0xffffffff, type: 0x12, data: 0xffffffff },
      { ns: s_ns_android, name: this.stringMap.get("launchMode"), raw: 0xffffffff, type: 0x10, data: 2 }
    ];
    nodes.push(this.buildElementStart(s_activity, 0xffffffff, actAttrs, 7));

    // <intent-filter>
    nodes.push(this.buildElementStart(s_intent_filter, 0xffffffff, [], 8));

    // <action android:name="android.intent.action.MAIN"/>
    const actActionAttrs = [
      { ns: s_ns_android, name: this.stringMap.get("name"), raw: v_action_main, type: 0x03, data: v_action_main }
    ];
    nodes.push(this.buildElementStart(s_action, 0xffffffff, actActionAttrs, 9));
    nodes.push(this.buildElementEnd(s_action, 0xffffffff, 9));

    // <category android:name="android.intent.category.LAUNCHER"/>
    const actCatAttrs = [
      { ns: s_ns_android, name: this.stringMap.get("name"), raw: v_cat_launcher, type: 0x03, data: v_cat_launcher }
    ];
    nodes.push(this.buildElementStart(s_category, 0xffffffff, actCatAttrs, 10));
    nodes.push(this.buildElementEnd(s_category, 0xffffffff, 10));

    nodes.push(this.buildElementEnd(s_intent_filter, 0xffffffff, 11));
    nodes.push(this.buildElementEnd(s_activity, 0xffffffff, 12));
    nodes.push(this.buildElementEnd(s_application, 0xffffffff, 13));
    nodes.push(this.buildElementEnd(s_manifest, 0xffffffff, 14));

    // END_NAMESPACE
    nodes.push(this.buildNode(0x0101, 24, 15, (b, off) => {
      b.writeUInt32LE(s_android, off);
      b.writeUInt32LE(s_ns_android, off + 4);
    }));

    const stringPool = this.buildStringPool();
    const resourceMap = this.buildResourceMap(attrCount);
    const nodesBody = Buffer.concat(nodes);

    const totalFileSize = 8 + stringPool.length + resourceMap.length + nodesBody.length;
    const axml = Buffer.alloc(totalFileSize);

    axml.writeUInt16LE(0x0003, 0); // RES_XML_TYPE
    axml.writeUInt16LE(0x0008, 2);
    axml.writeUInt32LE(totalFileSize, 4);

    let offset = 8;
    stringPool.copy(axml, offset);
    offset += stringPool.length;

    resourceMap.copy(axml, offset);
    offset += resourceMap.length;

    nodesBody.copy(axml, offset);

    return axml;
  }
}

// ==========================================
// 2. DALVIK BYTECODE (classes.dex) GENERATOR
// ==========================================
function adler32(buf, offset, len) {
  let a = 1, b = 0;
  const MOD = 65521;
  for (let i = 0; i < len; i++) {
    a = (a + buf[offset + i]) % MOD;
    b = (b + a) % MOD;
  }
  return ((b << 16) | a) >>> 0;
}

function writeUleb128(val) {
  const bytes = [];
  do {
    let b = val & 0x7f;
    val >>>= 7;
    if (val !== 0) b |= 0x80;
    bytes.push(b);
  } while (val !== 0);
  return Buffer.from(bytes);
}

class DexBuilder {
  build() {
    const rawStrings = [
      "<init>",
      "Landroid/app/Activity;",
      "Landroid/os/Bundle;",
      "Landroid/webkit/WebView;",
      "Lcom/islamicknowledge/portal/MainActivity;",
      "MainActivity.java",
      "V",
      "VL",
      "onCreate"
    ];

    const rawTypes = [1, 2, 3, 4, 6];
    const rawProtos = [
      { shorty: 6, returnType: 4, params: [] },
      { shorty: 7, returnType: 4, params: [1] }
    ];
    const rawMethods = [
      { classIdx: 0, protoIdx: 0, nameIdx: 0 },
      { classIdx: 0, protoIdx: 1, nameIdx: 8 },
      { classIdx: 3, protoIdx: 0, nameIdx: 0 },
      { classIdx: 3, protoIdx: 1, nameIdx: 8 }
    ];

    const initInsns = Buffer.from([0x70, 0x10, 0x00, 0x00, 0x00, 0x00, 0x0e, 0x00]);
    const onCreateInsns = Buffer.from([0x6f, 0x20, 0x01, 0x00, 0x10, 0x00, 0x0e, 0x00]);

    const headerSize = 112;
    const stringIdsOff = headerSize;
    const stringIdsSize = rawStrings.length;

    const typeIdsOff = stringIdsOff + stringIdsSize * 4;
    const typeIdsSize = rawTypes.length;

    const protoIdsOff = typeIdsOff + typeIdsSize * 4;
    const protoIdsSize = rawProtos.length;

    const methodIdsOff = protoIdsOff + protoIdsSize * 12;
    const methodIdsSize = rawMethods.length;

    const classDefsOff = methodIdsOff + methodIdsSize * 8;
    const classDefsSize = 1;

    let curOff = classDefsOff + classDefsSize * 32;

    curOff = (curOff + 3) & ~3;
    const proto1ParamsOff = curOff;
    const proto1ParamsBuf = Buffer.alloc(8);
    proto1ParamsBuf.writeUInt32LE(1, 0);
    proto1ParamsBuf.writeUInt16LE(1, 4);
    curOff += 8;

    curOff = (curOff + 3) & ~3;
    const initCodeOff = curOff;
    const initCodeHeader = Buffer.alloc(16);
    initCodeHeader.writeUInt16LE(1, 0);
    initCodeHeader.writeUInt16LE(1, 2);
    initCodeHeader.writeUInt16LE(1, 4);
    initCodeHeader.writeUInt16LE(0, 6);
    initCodeHeader.writeUInt32LE(0, 8);
    initCodeHeader.writeUInt32LE(initInsns.length / 2, 12);
    const initCodeBuf = Buffer.concat([initCodeHeader, initInsns]);
    curOff += initCodeBuf.length;

    curOff = (curOff + 3) & ~3;
    const onCreateCodeOff = curOff;
    const onCreateCodeHeader = Buffer.alloc(16);
    onCreateCodeHeader.writeUInt16LE(2, 0);
    onCreateCodeHeader.writeUInt16LE(2, 2);
    onCreateCodeHeader.writeUInt16LE(2, 4);
    onCreateCodeHeader.writeUInt16LE(0, 6);
    onCreateCodeHeader.writeUInt32LE(0, 8);
    onCreateCodeHeader.writeUInt32LE(onCreateInsns.length / 2, 12);
    const onCreateCodeBuf = Buffer.concat([onCreateCodeHeader, onCreateInsns]);
    curOff += onCreateCodeBuf.length;

    const classDataBytes = Buffer.concat([
      writeUleb128(0), writeUleb128(0), writeUleb128(1), writeUleb128(1),
      writeUleb128(2), writeUleb128(0x10001), writeUleb128(initCodeOff),
      writeUleb128(3), writeUleb128(0x0001), writeUleb128(onCreateCodeOff)
    ]);
    const classDataOff = curOff;
    curOff += classDataBytes.length;

    const stringDataOffsets = [];
    const stringDataBuffers = [];
    for (const s of rawStrings) {
      curOff = (curOff + 3) & ~3;
      stringDataOffsets.push(curOff);
      const sBuf = Buffer.from(s, 'utf8');
      const uleb = writeUleb128(s.length);
      const item = Buffer.concat([uleb, sBuf, Buffer.from([0])]);
      stringDataBuffers.push(item);
      curOff += item.length;
    }

    curOff = (curOff + 3) & ~3;
    const mapOff = curOff;
    const mapItems = [
      { type: 0x0000, size: 1, offset: 0 },
      { type: 0x0001, size: stringIdsSize, offset: stringIdsOff },
      { type: 0x0002, size: typeIdsSize, offset: typeIdsOff },
      { type: 0x0003, size: protoIdsSize, offset: protoIdsOff },
      { type: 0x0005, size: methodIdsSize, offset: methodIdsOff },
      { type: 0x0006, size: classDefsSize, offset: classDefsOff },
      { type: 0x1001, size: 1, offset: proto1ParamsOff },
      { type: 0x0001, size: 2, offset: initCodeOff },
      { type: 0x2000, size: 1, offset: classDataOff },
      { type: 0x2002, size: stringIdsSize, offset: stringDataOffsets[0] },
      { type: 0x1000, size: 1, offset: mapOff }
    ];
    const mapListBuf = Buffer.alloc(4 + mapItems.length * 12);
    mapListBuf.writeUInt32LE(mapItems.length, 0);
    for (let i = 0; i < mapItems.length; i++) {
      const item = mapItems[i];
      mapListBuf.writeUInt16LE(item.type, 4 + i * 12);
      mapListBuf.writeUInt16LE(0, 4 + i * 12 + 2);
      mapListBuf.writeUInt32LE(item.size, 4 + i * 12 + 4);
      mapListBuf.writeUInt32LE(item.offset, 4 + i * 12 + 8);
    }
    curOff += mapListBuf.length;

    const totalFileSize = curOff;
    const dex = Buffer.alloc(totalFileSize);

    Buffer.from("dex\n035\0").copy(dex, 0);
    dex.writeUInt32LE(totalFileSize, 32);
    dex.writeUInt32LE(headerSize, 36);
    dex.writeUInt32LE(0x12345678, 40);
    dex.writeUInt32LE(0, 44);
    dex.writeUInt32LE(0, 48);
    dex.writeUInt32LE(mapOff, 52);
    dex.writeUInt32LE(stringIdsSize, 56);
    dex.writeUInt32LE(stringIdsOff, 60);
    dex.writeUInt32LE(typeIdsSize, 64);
    dex.writeUInt32LE(typeIdsOff, 68);
    dex.writeUInt32LE(protoIdsSize, 72);
    dex.writeUInt32LE(protoIdsOff, 76);
    dex.writeUInt32LE(0, 80);
    dex.writeUInt32LE(0, 84);
    dex.writeUInt32LE(methodIdsSize, 88);
    dex.writeUInt32LE(methodIdsOff, 92);
    dex.writeUInt32LE(classDefsSize, 96);
    dex.writeUInt32LE(classDefsOff, 100);
    dex.writeUInt32LE(totalFileSize - classDefsOff, 104);
    dex.writeUInt32LE(classDefsOff, 108);

    for (let i = 0; i < stringIdsSize; i++) dex.writeUInt32LE(stringDataOffsets[i], stringIdsOff + i * 4);
    for (let i = 0; i < typeIdsSize; i++) dex.writeUInt32LE(rawTypes[i], typeIdsOff + i * 4);

    for (let i = 0; i < protoIdsSize; i++) {
      const p = rawProtos[i];
      dex.writeUInt32LE(p.shorty, protoIdsOff + i * 12);
      dex.writeUInt32LE(p.returnType, protoIdsOff + i * 12 + 4);
      dex.writeUInt32LE(p.params.length > 0 ? proto1ParamsOff : 0, protoIdsOff + i * 12 + 8);
    }

    for (let i = 0; i < methodIdsSize; i++) {
      const m = rawMethods[i];
      dex.writeUInt16LE(m.classIdx, methodIdsOff + i * 8);
      dex.writeUInt16LE(m.protoIdx, methodIdsOff + i * 8 + 2);
      dex.writeUInt32LE(m.nameIdx, methodIdsOff + i * 8 + 4);
    }

    dex.writeUInt32LE(3, classDefsOff);
    dex.writeUInt32LE(0x0001, classDefsOff + 4);
    dex.writeUInt32LE(0, classDefsOff + 8);
    dex.writeUInt32LE(0, classDefsOff + 12);
    dex.writeUInt32LE(5, classDefsOff + 16);
    dex.writeUInt32LE(0, classDefsOff + 20);
    dex.writeUInt32LE(classDataOff, classDefsOff + 24);
    dex.writeUInt32LE(0, classDefsOff + 28);

    proto1ParamsBuf.copy(dex, proto1ParamsOff);
    initCodeBuf.copy(dex, initCodeOff);
    onCreateCodeBuf.copy(dex, onCreateCodeOff);
    classDataBytes.copy(dex, classDataOff);

    for (let i = 0; i < stringIdsSize; i++) {
      stringDataBuffers[i].copy(dex, stringDataOffsets[i]);
    }
    mapListBuf.copy(dex, mapOff);

    const sha1 = crypto.createHash('sha1').update(dex.slice(32)).digest();
    sha1.copy(dex, 12);

    const checksum = adler32(dex, 12, dex.length - 12);
    dex.writeUInt32LE(checksum, 8);

    return dex;
  }
}

// ==========================================
// 3. RESOURCE TABLE (resources.arsc) GENERATOR
// ==========================================
class ArscBuilder {
  build() {
    const values = ["NoorDeen", "NoorDeen - Islamic Knowledge Portal"];
    const valuePool = this.buildStringPool(values);
    const typePool = this.buildStringPool(["string"]);
    const keyPool = this.buildStringPool(["app_name", "title_activity_main"]);

    const typeSpecBuf = Buffer.alloc(24);
    typeSpecBuf.writeUInt16LE(0x0202, 0);
    typeSpecBuf.writeUInt16LE(16, 2);
    typeSpecBuf.writeUInt32LE(24, 4);
    typeSpecBuf.writeUInt8(1, 8);
    typeSpecBuf.writeUInt32LE(2, 12);

    const typeHeaderSize = 16 + 68;
    const entriesStart = typeHeaderSize + 2 * 4;
    const totalTypeSize = entriesStart + 2 * 16;

    const typeBuf = Buffer.alloc(totalTypeSize);
    typeBuf.writeUInt16LE(0x0201, 0);
    typeBuf.writeUInt16LE(typeHeaderSize, 2);
    typeBuf.writeUInt32LE(totalTypeSize, 4);
    typeBuf.writeUInt8(1, 8);
    typeBuf.writeUInt32LE(2, 12);
    typeBuf.writeUInt32LE(entriesStart, 16);
    typeBuf.writeUInt32LE(68, 20);

    typeBuf.writeUInt32LE(0, typeHeaderSize);
    typeBuf.writeUInt32LE(16, typeHeaderSize + 4);

    let eOff = entriesStart;
    typeBuf.writeUInt16LE(8, eOff);
    typeBuf.writeUInt32LE(0, eOff + 4);
    typeBuf.writeUInt16LE(8, eOff + 8);
    typeBuf.writeUInt8(0x03, eOff + 11);
    typeBuf.writeUInt32LE(0, eOff + 12);

    eOff += 16;
    typeBuf.writeUInt16LE(8, eOff);
    typeBuf.writeUInt32LE(1, eOff + 4);
    typeBuf.writeUInt16LE(8, eOff + 8);
    typeBuf.writeUInt8(0x03, eOff + 11);
    typeBuf.writeUInt32LE(1, eOff + 12);

    const pkgHeaderSize = 288;
    const typeStringsOffset = pkgHeaderSize;
    const keyStringsOffset = typeStringsOffset + typePool.length;

    const totalPkgSize = pkgHeaderSize + typePool.length + keyPool.length + typeSpecBuf.length + typeBuf.length;
    const pkgBuf = Buffer.alloc(pkgHeaderSize);

    pkgBuf.writeUInt16LE(0x0200, 0);
    pkgBuf.writeUInt16LE(pkgHeaderSize, 2);
    pkgBuf.writeUInt32LE(totalPkgSize, 4);
    pkgBuf.writeUInt32LE(0x7f, 8);

    Buffer.from("com.islamicknowledge.portal", "utf16le").copy(pkgBuf, 12);
    pkgBuf.writeUInt32LE(typeStringsOffset, 268);
    pkgBuf.writeUInt32LE(1, 272);
    pkgBuf.writeUInt32LE(keyStringsOffset, 276);
    pkgBuf.writeUInt32LE(2, 280);

    const packageChunk = Buffer.concat([pkgBuf, typePool, keyPool, typeSpecBuf, typeBuf]);

    const tableHeaderSize = 12;
    const totalTableSize = tableHeaderSize + valuePool.length + packageChunk.length;

    const tableBuf = Buffer.alloc(tableHeaderSize);
    tableBuf.writeUInt16LE(0x0002, 0);
    tableBuf.writeUInt16LE(tableHeaderSize, 2);
    tableBuf.writeUInt32LE(totalTableSize, 4);
    tableBuf.writeUInt32LE(1, 8);

    return Buffer.concat([tableBuf, valuePool, packageChunk]);
  }

  buildStringPool(strings) {
    const count = strings.length;
    const offsets = [];
    const stringBuffers = [];
    let currentOffset = 0;

    for (let i = 0; i < count; i++) {
      offsets.push(currentOffset);
      const str = strings[i];
      const utf8 = Buffer.from(str, 'utf8');
      const utf16Len = str.length;
      const utf8Len = utf8.length;

      const header = [];
      if (utf16Len < 0x80) header.push(utf16Len);
      else header.push(0x80 | (utf16Len >>> 8), utf16Len & 0xff);

      if (utf8Len < 0x80) header.push(utf8Len);
      else header.push(0x80 | (utf8Len >>> 8), utf8Len & 0xff);

      const strBuf = Buffer.concat([Buffer.from(header), utf8, Buffer.from([0])]);
      stringBuffers.push(strBuf);
      currentOffset += strBuf.length;
    }

    const stringData = Buffer.concat(stringBuffers);
    const padLen = (4 - (stringData.length % 4)) % 4;
    const paddedStringData = Buffer.concat([stringData, Buffer.alloc(padLen)]);

    const offsetsSize = count * 4;
    const headerSize = 28;
    const stringsStart = headerSize + offsetsSize;
    const totalSize = stringsStart + paddedStringData.length;

    const poolBuf = Buffer.alloc(totalSize);
    poolBuf.writeUInt16LE(0x0001, 0);
    poolBuf.writeUInt16LE(headerSize, 2);
    poolBuf.writeUInt32LE(totalSize, 4);
    poolBuf.writeUInt32LE(count, 8);
    poolBuf.writeUInt32LE(0, 12);
    poolBuf.writeUInt32LE(0x00000100, 16);
    poolBuf.writeUInt32LE(stringsStart, 20);
    poolBuf.writeUInt32LE(0, 24);

    for (let i = 0; i < count; i++) {
      poolBuf.writeUInt32LE(offsets[i], headerSize + i * 4);
    }
    paddedStringData.copy(poolBuf, stringsStart);
    return poolBuf;
  }
}

// ==========================================
// 4. FULL APK PACKAGING & SIGNING
// ==========================================
console.log('Compiling Android Binary Manifest (AXML)...');
const axml = new AxmlBuilder().buildManifest();

console.log('Compiling Dalvik Executable Bytecode (classes.dex)...');
const dex = new DexBuilder().build();

console.log('Compiling Resource Table (resources.arsc)...');
const arsc = new ArscBuilder().build();

function walkDir(dir, baseDir) {
  let list = [];
  if (!fs.existsSync(dir)) return list;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === 'downloads' || e.name === '.git' || e.name === 'node_modules') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      list = list.concat(walkDir(full, baseDir));
    } else {
      list.push({
        path: full,
        entryName: path.relative(baseDir, full).replace(/\\/g, '/')
      });
    }
  }
  return list;
}

const entries = [
  { name: 'AndroidManifest.xml', data: axml, method: 8 },
  { name: 'resources.arsc', data: arsc, method: 0 },
  { name: 'classes.dex', data: dex, method: 8 }
];

const mipmapIcons = [
  'android/app/src/main/res/mipmap-mdpi/ic_launcher.png',
  'android/app/src/main/res/mipmap-hdpi/ic_launcher.png',
  'android/app/src/main/res/mipmap-xhdpi/ic_launcher.png',
  'android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png',
  'android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png'
];
for (const iconPath of mipmapIcons) {
  if (fs.existsSync(iconPath)) {
    const entryName = 'res/' + path.relative('android/app/src/main/res', iconPath).replace(/\\/g, '/');
    entries.push({ name: entryName, data: fs.readFileSync(iconPath), method: 0 });
  }
}

const publicFiles = walkDir('public', 'public');
for (const f of publicFiles) {
  entries.push({
    name: 'assets/public/' + f.entryName,
    data: fs.readFileSync(f.path),
    method: 8
  });
}

function buildZip(fileEntries) {
  const localHeaders = [];
  const cdEntries = [];
  let offset = 0;

  for (const f of fileEntries) {
    const fnBuf = Buffer.from(f.name, 'utf8');
    const crc = zlib.crc32(f.data);
    const compData = f.method === 8 ? zlib.deflateRawSync(f.data) : f.data;

    let extraBuf = Buffer.alloc(0);
    if (f.method === 0) {
      const headerLen = 30 + fnBuf.length;
      const dataOffset = offset + headerLen;
      const mod = dataOffset % 4;
      if (mod !== 0) {
        extraBuf = Buffer.alloc(4 - mod);
      }
    }

    const lh = Buffer.alloc(30);
    lh.writeUInt32LE(0x04034b50, 0);
    lh.writeUInt16LE(20, 4);
    lh.writeUInt16LE(0, 6);
    lh.writeUInt16LE(f.method, 8);
    lh.writeUInt16LE(0x5241, 10);
    lh.writeUInt16LE(0x5959, 12);
    lh.writeUInt32LE(crc, 14);
    lh.writeUInt32LE(compData.length, 18);
    lh.writeUInt32LE(f.data.length, 22);
    lh.writeUInt16LE(fnBuf.length, 26);
    lh.writeUInt16LE(extraBuf.length, 28);

    const fullLocal = Buffer.concat([lh, fnBuf, extraBuf, compData]);
    localHeaders.push(fullLocal);

    const cd = Buffer.alloc(46);
    cd.writeUInt32LE(0x02014b50, 0);
    cd.writeUInt16LE(20, 4);
    cd.writeUInt16LE(20, 6);
    cd.writeUInt16LE(0, 8);
    cd.writeUInt16LE(f.method, 10);
    cd.writeUInt16LE(0x5241, 12);
    cd.writeUInt16LE(0x5959, 14);
    cd.writeUInt32LE(crc, 16);
    cd.writeUInt32LE(compData.length, 20);
    cd.writeUInt32LE(f.data.length, 24);
    cd.writeUInt16LE(fnBuf.length, 28);
    cd.writeUInt16LE(0, 30);
    cd.writeUInt16LE(0, 32);
    cd.writeUInt16LE(0, 34);
    cd.writeUInt16LE(0, 36);
    cd.writeUInt32LE(0, 38);
    cd.writeUInt32LE(offset, 42);

    cdEntries.push(Buffer.concat([cd, fnBuf]));
    offset += fullLocal.length;
  }

  const cdData = Buffer.concat(cdEntries);
  const cdOffset = offset;
  const cdSize = cdData.length;

  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(fileEntries.length, 8);
  eocd.writeUInt16LE(fileEntries.length, 10);
  eocd.writeUInt32LE(cdSize, 12);
  eocd.writeUInt32LE(cdOffset, 16);
  eocd.writeUInt16LE(0, 20);

  return Buffer.concat([...localHeaders, cdData, eocd]);
}

console.log(`Packaging aligned APK with ${entries.length} entries...`);
const zipBuf = buildZip(entries);
const signedApkPath = path.resolve('public/downloads/islamic-portal-release.apk');
fs.writeFileSync(signedApkPath, zipBuf);

const keystorePath = path.resolve('android/app/release.keystore');
console.log('Signing APK with jarsigner and release.keystore...');
const jarsignerCmd = `jarsigner -keystore "${keystorePath}" -storepass noordeen123 -keypass noordeen123 -sigalg SHA256withRSA -digestalg SHA-256 "${signedApkPath}" noordeen`;
execSync(jarsignerCmd, { stdio: 'inherit' });

console.log('Verifying signed APK...');
const verifyCmd = `jarsigner -verify -verbose -certs "${signedApkPath}"`;
execSync(verifyCmd, { stdio: 'inherit' });

console.log('\nUpdating metadata and checksum manifests...');
execSync('node scripts/update-download-metadata.cjs', { stdio: 'inherit' });

console.log('\nGenuine Android Release APK v1.2.0 (build 10200) built and verified successfully!');
