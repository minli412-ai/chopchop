import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { recipes } from '../data/recipes';
import RecipeImage from '../components/common/RecipeImage';
import useFavorites from '../hooks/useFavorites';
import useLanguage from '../hooks/useLanguage';
import FavoriteButton from '../components/common/FavoriteButton';

function FavoritesPage() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { favorites, toggle, isFavorite } = useFavorites();
  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div className="favorites-page">
      <h2 className="home-title">{t('favorites.title')}</h2>
      {favoriteRecipes.length === 0 ? (
        <div className="favorites-empty">
          <span className="favorites-empty-icon">⭐</span>
          <p>{t('favorites.emptyTitle')}</p>
          <p>{t('favorites.emptyText')}</p>
          <Link to="/" className="favorites-browse-link">{t('favorites.browse')}</Link>
        </div>
      ) : (
        <div className="recipe-list">
          {favoriteRecipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card" data-category={recipe.category}>
              <RecipeImage recipeId={recipe.id} recipeName={recipe.name[language]} />
              <div className="recipe-card-content">
                <div className="recipe-card-text">
                  <span className="chinese-name">{recipe.chineseName}</span>
                  <span className="english-name">{recipe.name[language]}</span>
                </div>
                <div className="recipe-card-meta">
                  <span className="time-badge">{recipe.prepTime + recipe.cookTime} min</span>
                  <span className="method-badge">{t(`cookingMethod.${recipe.cookingMethod}`)}</span>
                  {(recipe.tags.en.includes('spicy') || recipe.imageConfig.pattern === 'spicy') && (
                    <span className="spicy-badge" title={t('recipe.spicy')}>🌶️</span>
                  )}
                </div>
              </div>
              <FavoriteButton recipeId={recipe.id} isFavorite={isFavorite(recipe.id)} onToggle={toggle} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
