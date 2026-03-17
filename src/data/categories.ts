import type { CategoryInfo } from '../types/recipe';

export const categories: CategoryInfo[] = [
  { id: 'cold-dishes', name: { en: 'Cold Dishes', fr: 'Entr\u00e9es Froides', pt: 'Pratos Frios', 'zh-CN': '\u51c9\u83dc', 'zh-TW': '\u6dbc\u83dc' }, icon: '\ud83e\udd57' },
  { id: 'soups', name: { en: 'Soups', fr: 'Soupes', pt: 'Sopas', 'zh-CN': '\u6c64', 'zh-TW': '\u6e6f' }, icon: '\ud83c\udf72' },
  { id: 'pork', name: { en: 'Pork', fr: 'Porc', pt: 'Porco', 'zh-CN': '\u732a\u8089', 'zh-TW': '\u8c6c\u8089' }, icon: '\ud83e\udd69' },
  { id: 'chicken', name: { en: 'Chicken', fr: 'Poulet', pt: 'Frango', 'zh-CN': '\u9e21\u8089', 'zh-TW': '\u96de\u8089' }, icon: '\ud83c\udf57' },
  { id: 'beef', name: { en: 'Beef', fr: 'B\u0153uf', pt: 'Carne de Vaca', 'zh-CN': '\u725b\u8089', 'zh-TW': '\u725b\u8089' }, icon: '\ud83e\udd69' },
  { id: 'lamb', name: { en: 'Lamb', fr: 'Agneau', pt: 'Cordeiro', 'zh-CN': '\u7f8a\u8089', 'zh-TW': '\u7f8a\u8089' }, icon: '\ud83c\udf56' },
  { id: 'fish-seafood', name: { en: 'Fish & Seafood', fr: 'Poisson & Fruits de Mer', pt: 'Peixe & Marisco', 'zh-CN': '\u9c7c\u548c\u6d77\u9c9c', 'zh-TW': '\u9b5a\u548c\u6d77\u9bae' }, icon: '\ud83d\udc1f' },
  { id: 'rice-noodles', name: { en: 'Rice & Noodles', fr: 'Riz & Nouilles', pt: 'Arroz & Massas', 'zh-CN': '\u7c73\u996d\u548c\u9762\u6761', 'zh-TW': '\u7c73\u98ef\u548c\u9eb5\u689d' }, icon: '\ud83c\udf5a' },
  { id: 'vegetables', name: { en: 'Vegetables & Tofu', fr: 'L\u00e9gumes & Tofu', pt: 'Legumes & Tofu', 'zh-CN': '\u84d4\u83dc\u548c\u8c46\u8150', 'zh-TW': '\u84d4\u83dc\u548c\u8c46\u8150' }, icon: '\ud83e\udd6c' },
  { id: 'desserts', name: { en: 'Desserts', fr: 'Desserts', pt: 'Sobremesas', 'zh-CN': '\u751c\u54c1', 'zh-TW': '\u751c\u54c1' }, icon: '\ud83c\udf6e' },
];
