import { Translations, en } from './en';
import { ar } from './ar';
import { ur } from './ur';
import { id } from './id';
import { tr } from './tr';
import { fr } from './fr';

export const translations: Record<string, Partial<Translations>> = {
  en,
  ar,
  ur,
  id,
  tr,
  fr,
};

export function getTranslations(lang: string): Translations {
  const selected = translations[lang] || {};
  return {
    ...en,
    ...selected,
  };
}
