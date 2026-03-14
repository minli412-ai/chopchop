import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../common/LanguageSelector';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="app-header">
      <Link to="/" className="header-logo">
        <div className="seal-stamp">
          <span>切</span>
        </div>
        <div className="header-logo-text">
          <h1>{t('app.title')}</h1>
          <p>{t('app.subtitle')}</p>
        </div>
      </Link>
      <nav className="header-nav">
        <Link to="/">{t('nav.home')}</Link>
        <Link to="/favorites">{t('nav.favorites')}</Link>
        <LanguageSelector />
      </nav>
    </header>
  );
}

export default Header;
