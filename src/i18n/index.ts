import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fr from './fr.json';
import pt from './pt.json';
import zhCN from './zh-CN.json';
import zhTW from './zh-TW.json';

const savedLang = localStorage.getItem('chopchop-language');

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    pt: { translation: pt },
    'zh-CN': { translation: zhCN },
    'zh-TW': { translation: zhTW },
  },
  lng: savedLang || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
