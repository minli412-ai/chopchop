import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { recipes } from '../../data/recipes';
import { pickerIngredients, ingredientCategoryLabels } from '../../data/ingredients';
import useLanguage from '../../hooks/useLanguage';
import type { IngredientCategory, Language } from '../../types/recipe';
import SwipeCarousel from '../common/SwipeCarousel';

interface AsianIngredient {
  id: string;
  name: Record<Language, string>;
  chineseName: string;
  icon: string;
  category: IngredientCategory;
  recipeIds: string[];
}

function AsianGrocerySection() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const asianIngredients = useMemo(() => {
    const ingredientMap = new Map<string, AsianIngredient>();

    // Scan all recipes for commonInEurope: false ingredients
    for (const recipe of recipes) {
      for (const ingredient of recipe.ingredients) {
        if (!ingredient.commonInEurope) {
          const existing = ingredientMap.get(ingredient.id);
          if (existing) {
            if (!existing.recipeIds.includes(recipe.id)) {
              existing.recipeIds.push(recipe.id);
            }
          } else {
            // Look up emoji from picker
            const pickerItem = pickerIngredients.find(p => p.id === ingredient.id);
            // Get Chinese name from zh-CN or zh-TW
            const chineseName = ingredient.name['zh-CN'] || ingredient.name['zh-TW'] || '';
            ingredientMap.set(ingredient.id, {
              id: ingredient.id,
              name: ingredient.name,
              chineseName,
              icon: pickerItem?.icon || '🥢',
              category: ingredient.category,
              recipeIds: [recipe.id],
            });
          }
        }
      }
    }

    return Array.from(ingredientMap.values());
  }, []);

  // Group by category
  const grouped = useMemo(() => {
    const groups = new Map<IngredientCategory, AsianIngredient[]>();
    for (const item of asianIngredients) {
      const list = groups.get(item.category) || [];
      list.push(item);
      groups.set(item.category, list);
    }
    // Sort categories: sauce, spice, protein, vegetable, oil, other
    const order: IngredientCategory[] = ['sauce', 'spice', 'protein', 'vegetable', 'oil', 'grain', 'other'];
    return order
      .filter(cat => groups.has(cat))
      .map(cat => ({ category: cat, items: groups.get(cat)! }));
  }, [asianIngredients]);

  const getRecipeName = (recipeId: string) => {
    const recipe = recipes.find(r => r.id === recipeId);
    return recipe ? `${recipe.chineseName} ${recipe.name[language]}` : recipeId;
  };

  if (asianIngredients.length === 0) return null;

  return (
    <section className="asian-grocery-section">
      <h3 className="category-heading" data-category="asian-grocery">
        <span className="category-icon">🛒</span>
        {t('asianGrocery.title')}
      </h3>
      <p className="section-subtitle">{t('asianGrocery.subtitle')}</p>

      {grouped.map(({ category, items }) => (
        <div key={category} className="asian-grocery-category-group">
          <div className="asian-grocery-category-label">
            {ingredientCategoryLabels[category][language]}
          </div>
          <SwipeCarousel cardsPerView={{ mobile: 2, tablet: 3, desktop: 4 }}>
            {items.map(item => (
              <div
                key={item.id}
                className="asian-ingredient-card"
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              >
                <div className="asian-ingredient-card-header">
                  <span className="asian-ingredient-icon">{item.icon}</span>
                  <div className="asian-ingredient-names">
                    <div className="asian-ingredient-name">{item.name[language]}</div>
                    <div className="asian-ingredient-chinese">{item.chineseName}</div>
                  </div>
                </div>
                <span className="category-tag">
                  {ingredientCategoryLabels[item.category][language]}
                </span>
                {expandedId === item.id && (
                  <div className="asian-ingredient-recipes">
                    <div className="asian-ingredient-recipes-label">{t('asianGrocery.usedIn')}</div>
                    {item.recipeIds.map(rid => (
                      <Link
                        key={rid}
                        to={`/recipe/${rid}`}
                        className="asian-ingredient-recipe-link"
                        onClick={e => e.stopPropagation()}
                      >
                        {getRecipeName(rid)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </SwipeCarousel>
        </div>
      ))}
    </section>
  );
}

export default AsianGrocerySection;
