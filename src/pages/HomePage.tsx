import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { recipes } from '../data/recipes';
import { categories } from '../data/categories';
import RecipeImage from '../components/common/RecipeImage';
import SearchBar from '../components/Search/SearchBar';
import IngredientPicker from '../components/Search/IngredientPicker';
import { searchRecipes } from '../utils/search';
import type { Recipe } from '../types/recipe';
import useFavorites from '../hooks/useFavorites';
import useLanguage from '../hooks/useLanguage';
import FavoriteButton from '../components/common/FavoriteButton';
import AsianGrocerySection from '../components/AsianGrocery/AsianGrocerySection';
import AlternativesSection from '../components/Alternatives/AlternativesSection';
import SwipeCarousel from '../components/common/SwipeCarousel';

function HomePage() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { toggle, isFavorite } = useFavorites();
  const [searchParams, setSearchParams] = useSearchParams();
  const regionFilter = searchParams.get('region');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'menu' | 'fridge'>('menu');

  const filteredRecipes = useMemo(() => {
    let results = searchRecipes(recipes, searchQuery, language);
    if (regionFilter) {
      results = results.filter((r) => r.region === regionFilter);
    }
    return results;
  }, [searchQuery, language, regionFilter]);

  const recipesByCategory = filteredRecipes.reduce<Record<string, Recipe[]>>((acc, recipe) => {
    if (!acc[recipe.category]) {
      acc[recipe.category] = [];
    }
    acc[recipe.category].push(recipe);
    return acc;
  }, {});

  const categoriesWithRecipes = categories.filter(
    (cat) => recipesByCategory[cat.id] && recipesByCategory[cat.id].length > 0
  );

  return (
    <div className="home-page">
      <div className="home-hero">
        <p className="home-subtitle">{t('home.subtitle')}</p>
      </div>

      {activeTab === 'menu' && (
        <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      )}

      <div className="home-tabs">
        <button
          className={`home-tab ${activeTab === 'menu' ? 'active' : ''}`}
          onClick={() => setActiveTab('menu')}
        >
          {t('tabs.menu')}
        </button>
        <button
          className={`home-tab ${activeTab === 'fridge' ? 'active' : ''}`}
          onClick={() => setActiveTab('fridge')}
        >
          {t('tabs.fridge')}
        </button>
      </div>

      {activeTab === 'menu' && (
        <>
          {searchQuery && categoriesWithRecipes.length === 0 && (
            <div className="search-no-results">
              <p>{t('search.noResults')}</p>
            </div>
          )}

          {regionFilter && (
            <div className="region-filter-bar">
              <span>📍 {t('region.filterByRegion', { region: t(`region.${regionFilter}`) })}</span>
              <button className="clear-filter-btn" onClick={() => setSearchParams({})}>
                ✕ {t('region.clearFilter')}
              </button>
            </div>
          )}

          {categoriesWithRecipes.map((category) => (
            <section key={category.id} className="category-section">
              <h3 className="category-heading" data-category={category.id}>
                <span className="category-icon">{category.icon}</span>
                {category.name[language]}
              </h3>
              <SwipeCarousel cardsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}>
                {recipesByCategory[category.id].map((recipe) => (
                  <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card" data-category={recipe.category}>
                    <RecipeImage recipeId={recipe.id} recipeName={recipe.name[language]} imageConfig={recipe.imageConfig} />
                    <div className="recipe-card-content">
                      <div className="recipe-card-text">
                        <span className="chinese-name">{recipe.chineseName}</span>
                        <span className="english-name">{recipe.name[language]}</span>
                      </div>
                      <div className="recipe-card-meta">
                        <span className="time-badge">
                          {recipe.prepTime + recipe.cookTime} min
                        </span>
                        <span className="method-badge">
                          {t(`cookingMethod.${recipe.cookingMethod}`)}
                        </span>
                        <span className={`badge badge-${recipe.difficulty}`}>
                          {t(`difficulty.${recipe.difficulty}`)}
                        </span>
                        {(recipe.tags.en.includes('spicy') || recipe.imageConfig.pattern === 'spicy') && (
                          <span className="spicy-badge" title={t('recipe.spicy')}>🌶️</span>
                        )}
                        {recipe.region && !regionFilter && (
                          <span className="region-badge" title={t(`region.${recipe.region}`)}>
                            {t(`region.${recipe.region}`)}
                          </span>
                        )}
                      </div>
                    </div>
                    <FavoriteButton recipeId={recipe.id} isFavorite={isFavorite(recipe.id)} onToggle={toggle} />
                  </Link>
                ))}
              </SwipeCarousel>
            </section>
          ))}

          <AsianGrocerySection />
          <AlternativesSection />
        </>
      )}

      {activeTab === 'fridge' && <IngredientPicker />}
    </div>
  );
}

export default HomePage;
