import Fuse from 'fuse.js';
import type { Recipe, Language } from '../types/recipe';

export function createSearchIndex(recipes: Recipe[], language: Language): Fuse<Recipe> {
  return new Fuse(recipes, {
    keys: [
      { name: 'localizedName', getFn: (r: Recipe) => r.name[language], weight: 3 },
      { name: 'chineseName', getFn: (r: Recipe) => r.chineseName, weight: 3 },
      { name: 'pinyin', getFn: (r: Recipe) => r.pinyin, weight: 2 },
      { name: 'ingredients', getFn: (r: Recipe) => r.ingredients.map(i => i.name[language]).join(' '), weight: 1 },
      { name: 'tags', getFn: (r: Recipe) => r.tags[language].join(' '), weight: 1 },
    ],
    threshold: 0.3,
    ignoreLocation: true,
    minMatchCharLength: 2,
  });
}

export function searchRecipes(
  recipes: Recipe[],
  query: string,
  language: Language
): Recipe[] {
  if (!query.trim()) return recipes;
  const fuse = createSearchIndex(recipes, language);
  return fuse.search(query).map((result) => result.item);
}
