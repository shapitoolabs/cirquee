// TRANSLATES
import { getLocales } from 'expo-localization';

import { I18n } from 'i18n-js';

import { env } from '@/env';

import cs from '../../language/cs.json';
import en from '../../language/en.json';

const i18n = new I18n(
  {
    cs,
    en,
  },
  { defaultLocale: env.EXPO_PUBLIC_DEFAULT_LANGUAGE, enableFallback: true }
);
i18n.locale = getLocales()[0].languageCode || env.EXPO_PUBLIC_DEFAULT_LANGUAGE; // Provide 'en' as a default if languageCode is null

export const useTranslations = () => {
  const t = (path: string) => {
    return i18n.t(path);
  };

  return { t };
};
