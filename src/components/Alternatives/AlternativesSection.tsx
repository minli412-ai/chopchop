import { useTranslation } from 'react-i18next';
import { bannedIngredients, upgradeIngredients } from '../../data/alternatives';
import useLanguage from '../../hooks/useLanguage';
import SwipeCarousel from '../common/SwipeCarousel';

function AlternativesSection() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section className="alternatives-section">
      <h3 className="category-heading" data-category="asian-grocery">
        <span className="category-icon">🔄</span>
        {t('alternatives.title')}
      </h3>
      <p className="section-subtitle">{t('alternatives.subtitle')}</p>

      <div className="alternatives-subsection">
        <h4 className="alternatives-subsection-title">
          {t('alternatives.bannedTitle')}
        </h4>
        <SwipeCarousel cardsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}>
          {bannedIngredients.map(item => (
            <div key={item.id} className="banned-card">
              <div className="banned-card-header">
                <span className="banned-card-name">{item.name[language]}</span>
                <span className="banned-card-chinese">({item.chineseName})</span>
              </div>
              <div className="banned-card-reason">{item.reason[language]}</div>
              <div className="banned-card-alternative">
                {t('alternatives.useInstead')}: {item.alternative[language]}
              </div>
              <div className="banned-card-details">
                {item.alternativeDetails[language]}
              </div>
            </div>
          ))}
        </SwipeCarousel>
      </div>

      <div className="alternatives-subsection">
        <h4 className="alternatives-subsection-title">
          {t('alternatives.upgradeTitle')}
        </h4>
        <SwipeCarousel cardsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}>
          {upgradeIngredients.map(item => (
            <div key={item.id} className="upgrade-card">
              <div className="upgrade-card-header">
                <span className="upgrade-card-common">{item.commonVersion[language]}</span>
                <span className="upgrade-card-arrow">→</span>
                <span className="upgrade-card-upgrade">{item.traditionalUpgrade[language]}</span>
              </div>
              <div className="upgrade-card-details">
                {item.details[language]}
              </div>
            </div>
          ))}
        </SwipeCarousel>
      </div>
    </section>
  );
}

export default AlternativesSection;
