import useLanguage from '../../hooks/useLanguage';

function LanguageSelector() {
  const { language, changeLanguage, availableLanguages } = useLanguage();

  return (
    <select
      className="language-selector"
      value={language}
      onChange={(e) => changeLanguage(e.target.value as any)}
      aria-label="Select language"
    >
      {availableLanguages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector;
