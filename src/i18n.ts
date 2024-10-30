import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)  // Load translation files from backend (or public folder)
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    lng: 'he', // Default language
    fallbackLng: 'he', // Fallback language if translation is missing
    debug: true,
    backend: {
      // Path to load the translations from (adjust if necessary)
    //   loadPath: '/locales/{{lng}}/translation.json',
    loadPath: 'src/locales/{{lng}}/translation.json'

    },
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
