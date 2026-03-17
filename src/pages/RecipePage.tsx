import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { recipes } from '../data/recipes';
import RecipeImage from '../components/common/RecipeImage';
import useFavorites from '../hooks/useFavorites';
import useLanguage from '../hooks/useLanguage';
import FavoriteButton from '../components/common/FavoriteButton';

function RecipePage() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { toggle, isFavorite } = useFavorites();
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe Not Found</h2>
        <p>Sorry, we couldn't find that recipe.</p>
        <Link to="/" className="recipe-back-link">{t('recipe.backToHome')}</Link>
      </div>
    );
  }

  return (
    <div className="recipe-page">
      <Link to="/" className="recipe-back-link">{t('recipe.backToHome')}</Link>

      <RecipeImage recipeId={recipe.id} recipeName={recipe.name[language]} />

      <div className="recipe-header">
        <h1 className="chinese-name">{recipe.chineseName}</h1>
        <p className="pinyin">{recipe.pinyin}</p>
        <h2 className="english-name">{recipe.name[language]}</h2>
        <FavoriteButton recipeId={recipe.id} isFavorite={isFavorite(recipe.id)} onToggle={toggle} />
      </div>

      <div className="recipe-info-bar">
        <span className="info-badge">
          <span className="info-badge-icon">🔪</span>
          <span className="info-badge-label">{t('recipe.prep')}</span>
          <span className="info-badge-value">{recipe.prepTime} min</span>
        </span>
        <span className="info-badge">
          <span className="info-badge-icon">🔥</span>
          <span className="info-badge-label">{t('recipe.cook')}</span>
          <span className="info-badge-value">{recipe.cookTime} min</span>
        </span>
        <span className="info-badge">
          <span className="info-badge-icon">🍽️</span>
          <span className="info-badge-label">{t('recipe.serves')}</span>
          <span className="info-badge-value">{recipe.servings}</span>
        </span>
        <span className={`info-badge badge-${recipe.difficulty}`}>
          <span className="info-badge-label">{t('recipe.level')}</span>
          <span className="info-badge-value">{t(`difficulty.${recipe.difficulty}`)}</span>
        </span>
        <span className="info-badge method-badge">
          <span className="info-badge-label">{t('recipe.method')}</span>
          <span className="info-badge-value">{t(`cookingMethod.${recipe.cookingMethod}`)}</span>
        </span>
        {(recipe.tags.en.includes('spicy') || recipe.imageConfig.pattern === 'spicy') && (
          <span className="info-badge spicy-info-badge">
            <span className="info-badge-icon">🌶️</span>
            <span className="info-badge-value">{t('recipe.spicy')}</span>
          </span>
        )}
      </div>

      <section className="recipe-section">
        <h3 className="recipe-section-title">
          <span className="chopstick-divider" />
          {t('recipe.ingredients')}
          <span className="chopstick-divider" />
        </h3>
        <ul className="ingredient-list">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.id} className="ingredient-item">
              <span className="ingredient-quantity">
                {ingredient.quantity.value} {ingredient.quantity.unit}
              </span>
              <span className="ingredient-name">
                {ingredient.name[language]}
              </span>
              {!ingredient.commonInEurope && (
                <span className="asian-grocery-badge">{t('recipe.asianGrocery')}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="recipe-section">
        <h3 className="recipe-section-title">
          <span className="chopstick-divider" />
          {t('recipe.steps')}
          <span className="chopstick-divider" />
        </h3>
        <ol className="step-list">
          {recipe.steps
            .sort((a, b) => a.order - b.order)
            .map((step) => (
              <li key={step.order} className="step-item">
                <span className="step-number">{step.order}</span>
                <div className="step-content">
                  <p className="step-text">{step.text[language]}</p>
                  {step.tip && (
                    <div className="step-tip">
                      <span className="step-tip-label">💡 {t('recipe.tip')}:</span> {step.tip[language]}
                    </div>
                  )}
                </div>
              </li>
            ))}
        </ol>
      </section>
    </div>
  );
}

export default RecipePage;
