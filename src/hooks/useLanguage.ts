import { useTranslation } from 'react-i18next';
import type { Language } from '../types/recipe';

const STORAGE_KEY = 'chopchop-language';

const availableLanguages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'pt', label: 'Português' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
];

function useLanguage() {
  const { i18n } = useTranslation();

  const language = (i18n.language || 'en') as Language;

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  return { language, changeLanguage, availableLanguages };
}

export default useLanguage;
