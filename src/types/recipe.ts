export type Language = 'en' | 'fr' | 'pt' | 'zh-CN' | 'zh-TW';
export type LocalizedString = Record<Language, string>;
export type LocalizedStringArray = Record<Language, string[]>;

export type Category =
  | 'cold-dishes'
  | 'soups'
  | 'pork'
  | 'chicken'
  | 'beef'
  | 'lamb'
  | 'fish-seafood'
  | 'rice-noodles'
  | 'vegetables'
  | 'desserts'
  | 'asian-grocery';

export type CookingMethod =
  | 'stir-fry'
  | 'deep-fry'
  | 'steam'
  | 'braise'
  | 'boil'
  | 'roast'
  | 'cold-mix'
  | 'simmer'
  | 'pan-fry'
  | 'smoke';

export type Region =
  | 'sichuan'
  | 'cantonese'
  | 'northern'
  | 'hunan'
  | 'jiangsu-shanghai'
  | 'fujian'
  | 'shandong'
  | 'northwestern'
  | 'hakka'
  | 'hubei'
  | 'home-style';

export type IngredientCategory =
  | 'protein'
  | 'vegetable'
  | 'grain'
  | 'sauce'
  | 'spice'
  | 'oil'
  | 'other';

export interface Quantity {
  value: number;
  unit: string;
}

export interface Ingredient {
  id: string;
  quantity: Quantity;
  name: LocalizedString;
  category: IngredientCategory;
  commonInEurope: boolean;
  substitution?: LocalizedString;
}

export interface Step {
  order: number;
  text: LocalizedString;
  tip?: LocalizedString;
}

export interface ImageConfig {
  primaryColor: string;
  secondaryColor: string;
  icon: string;
  pattern: string;
}

export interface Recipe {
  id: string;
  category: Category;
  cookingMethod: CookingMethod;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  chineseName: string;
  pinyin: string;
  imageConfig: ImageConfig;
  name: LocalizedString;
  description: LocalizedString;
  ingredients: Ingredient[];
  steps: Step[];
  tags: LocalizedStringArray;
  region?: Region;
}

export interface RecipeMatch {
  recipe: Recipe;
  matchedIngredients: string[];
  missingIngredients: string[];
  matchPercentage: number;
}

export interface CategoryInfo {
  id: Category;
  name: LocalizedString;
  icon: string;
}
