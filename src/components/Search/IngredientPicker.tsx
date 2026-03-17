import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useLanguage from '../../hooks/useLanguage';
import { recipes } from '../../data/recipes';
import { pickerIngredients, ingredientCategoryLabels } from '../../data/ingredients';
import RecipeImage from '../common/RecipeImage';
import FavoriteButton from '../common/FavoriteButton';
import useFavorites from '../../hooks/useFavorites';
import type { IngredientCategory } from '../../types/recipe';

// Staple ingredients to exclude from matching (everyone has these)
const STAPLES = ['salt', 'sugar', 'white-pepper', 'vegetable-oil', 'water'];

function IngredientPicker() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { toggle: toggleFav, isFavorite } = useFavorites();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const toggleIngredient = (id: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const clearAll = () => setSelectedIngredients([]);

  // Group picker ingredients by category
  const groupedIngredients = useMemo(() => {
    const groups: Record<string, typeof pickerIngredients> = {};
    for (const ing of pickerIngredients) {
      if (!groups[ing.category]) groups[ing.category] = [];
      groups[ing.category].push(ing);
    }
    return groups;
  }, []);

  // Match recipes by selected ingredients
  const matchedRecipes = useMemo(() => {
    if (selectedIngredients.length === 0) return [];

    return recipes
      .map((recipe) => {
        const recipeIngredientIds = recipe.ingredients
          .map((i) => i.id)
          .filter((id) => !STAPLES.includes(id));
        const matched = recipeIngredientIds.filter((id) => selectedIngredients.includes(id));
        const missing = recipeIngredientIds.filter((id) => !selectedIngredients.includes(id));
        const matchPercentage = recipeIngredientIds.length > 0
          ? Math.round((matched.length / recipeIngredientIds.length) * 100)
          : 0;

        return { recipe, matched, missing, matchPercentage };
      })
      .filter((m) => m.matched.length > 0)
      .sort((a, b) => b.matchPercentage - a.matchPercentage);
  }, [selectedIngredients]);

  const categoryOrder: IngredientCategory[] = ['protein', 'vegetable', 'grain', 'sauce', 'spice', 'oil', 'other'];

  return (
    <div className="fridge-picker">
      <h3 className="fridge-title">{t('fridge.title')}</h3>
      <p className="fridge-subtitle">{t('fridge.subtitle')}</p>

      {selectedIngredients.length > 0 && (
        <button className="fridge-clear" onClick={clearAll}>
          {t('fridge.clearAll')}
        </button>
      )}

      <div className="fridge-categories">
        {categoryOrder.map((cat) => {
          const items = groupedIngredients[cat];
          if (!items || items.length === 0) return null;
          return (
            <div key={cat} className="fridge-category">
              <h4 className="fridge-category-label">{ingredientCategoryLabels[cat][language]}</h4>
              <div className="fridge-ingredients">
                {items.map((ing) => (
                  <button
                    key={ing.id}
                    className={`fridge-ingredient ${selectedIngredients.includes(ing.id) ? 'selected' : ''}`}
                    onClick={() => toggleIngredient(ing.id)}
                  >
                    <span className="fridge-ingredient-icon">{ing.icon}</span>
                    <span className="fridge-ingredient-name">{ing.name[language]}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {matchedRecipes.length > 0 && (
        <div className="fridge-results">
          <h3 className="fridge-results-title">
            {matchedRecipes.length} {matchedRecipes.length === 1 ? 'recipe' : 'recipes'} found
          </h3>
          <div className="recipe-list">
            {matchedRecipes.map(({ recipe, matchPercentage, missing }) => (
              <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card fridge-recipe-card" data-category={recipe.category}>
                <RecipeImage recipeId={recipe.id} recipeName={recipe.name[language]} imageConfig={recipe.imageConfig} />
                <div className="recipe-card-content">
                  <div className="recipe-card-text">
                    <span className="chinese-name">{recipe.chineseName}</span>
                    <span className="english-name">{recipe.name[language]}</span>
                  </div>
                  <div className="fridge-match-bar">
                    <div className="fridge-match-fill" style={{ width: `${matchPercentage}%` }} />
                    <span className="fridge-match-label">{matchPercentage}% {t('fridge.matchLabel')}</span>
                  </div>
                  {missing.length > 0 && (
                    <div className="fridge-missing">
                      <span className="fridge-missing-label">{t('fridge.missingLabel')}</span>
                      {missing.map((id) => {
                        const ing = recipe.ingredients.find((i) => i.id === id);
                        return ing ? (
                          <span key={id} className="fridge-missing-item">{ing.name[language]}</span>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
                <FavoriteButton recipeId={recipe.id} isFavorite={isFavorite(recipe.id)} onToggle={toggleFav} />
              </Link>
            ))}
          </div>
        </div>
      )}

      {selectedIngredients.length > 0 && matchedRecipes.length === 0 && (
        <div className="search-no-results">
          <p>{t('search.noResults')}</p>
        </div>
      )}
    </div>
  );
}

export default IngredientPicker;
