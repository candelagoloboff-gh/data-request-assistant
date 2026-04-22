import { initReactI18next } from 'react-i18next';

import translations from 'hu-translations';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  defaultNS: 'general',
  interpolation: {
    escapeValue: false,
  },
  resources: translations,
});

export default i18n;
