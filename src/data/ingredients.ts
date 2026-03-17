import type { Language, IngredientCategory } from '../types/recipe';

export interface PickerIngredient {
  id: string;
  name: Record<Language, string>;
  category: IngredientCategory;
  icon: string;
}

export const pickerIngredients: PickerIngredient[] = [
  // ── Proteins ──────────────────────────────────
  { id: 'egg', name: { en: 'Eggs', fr: 'Oeufs', pt: 'Ovos', 'zh-CN': '鸡蛋', 'zh-TW': '雞蛋' }, category: 'protein', icon: '🥚' },
  { id: 'tofu-soft', name: { en: 'Soft Tofu', fr: 'Tofu soyeux', pt: 'Tofu macio', 'zh-CN': '嫩豆腐', 'zh-TW': '嫩豆腐' }, category: 'protein', icon: '🧈' },
  { id: 'pork-mince', name: { en: 'Pork Mince', fr: 'Porc haché', pt: 'Carne de porco moída', 'zh-CN': '猪肉末', 'zh-TW': '豬肉末' }, category: 'protein', icon: '🥩' },
  { id: 'pork-loin', name: { en: 'Pork Loin', fr: 'Longe de porc', pt: 'Lombo de porco', 'zh-CN': '猪里脊肉', 'zh-TW': '豬里脊肉' }, category: 'protein', icon: '🥩' },
  { id: 'pork-belly', name: { en: 'Pork Belly', fr: 'Poitrine de porc', pt: 'Barriga de porco', 'zh-CN': '五花肉', 'zh-TW': '五花肉' }, category: 'protein', icon: '🥓' },
  { id: 'chicken-breast', name: { en: 'Chicken Breast', fr: 'Blanc de poulet', pt: 'Peito de frango', 'zh-CN': '鸡胸肉', 'zh-TW': '雞胸肉' }, category: 'protein', icon: '🍗' },
  { id: 'beef-sirloin', name: { en: 'Beef Sirloin', fr: 'Faux-filet de boeuf', pt: 'Contrafilé', 'zh-CN': '牛里脊', 'zh-TW': '牛里脊' }, category: 'protein', icon: '🥩' },
  { id: 'lamb-leg', name: { en: 'Lamb Leg', fr: "Gigot d'agneau", pt: 'Pernil de cordeiro', 'zh-CN': '羊腿肉', 'zh-TW': '羊腿肉' }, category: 'protein', icon: '🍖' },
  { id: 'white-fish', name: { en: 'White Fish', fr: 'Poisson blanc', pt: 'Peixe branco', 'zh-CN': '白鱼', 'zh-TW': '白魚' }, category: 'protein', icon: '🐟' },
  { id: 'shrimp', name: { en: 'Shrimp', fr: 'Crevettes', pt: 'Camarão', 'zh-CN': '虾', 'zh-TW': '蝦' }, category: 'protein', icon: '🦐' },
  { id: 'duck', name: { en: 'Duck', fr: 'Canard', pt: 'Pato', 'zh-CN': '鸭肉', 'zh-TW': '鴨肉' }, category: 'protein', icon: '🦆' },
  { id: 'clams', name: { en: 'Clams', fr: 'Palourdes', pt: 'Amêijoas', 'zh-CN': '蛤蜊', 'zh-TW': '蛤蜊' }, category: 'protein', icon: '🐚' },
  { id: 'squid', name: { en: 'Squid', fr: 'Calamar', pt: 'Lula', 'zh-CN': '鱿鱼', 'zh-TW': '魷魚' }, category: 'protein', icon: '🦑' },
  { id: 'pork-ribs', name: { en: 'Pork Ribs', fr: 'Travers de porc', pt: 'Costelas de porco', 'zh-CN': '排骨', 'zh-TW': '排骨' }, category: 'protein', icon: '🍖' },
  { id: 'tofu-pressed', name: { en: 'Pressed Tofu', fr: 'Tofu pressé', pt: 'Tofu prensado', 'zh-CN': '豆干', 'zh-TW': '豆干' }, category: 'protein', icon: '🧈' },
  { id: 'tofu-skin', name: { en: 'Tofu Skin', fr: 'Peau de tofu', pt: 'Pele de tofu', 'zh-CN': '豆皮', 'zh-TW': '豆皮' }, category: 'protein', icon: '🧈' },

  // ── Vegetables ────────────────────────────────
  { id: 'tomato', name: { en: 'Tomatoes', fr: 'Tomates', pt: 'Tomates', 'zh-CN': '番茄', 'zh-TW': '番茄' }, category: 'vegetable', icon: '🍅' },
  { id: 'spring-onion', name: { en: 'Spring Onions', fr: 'Oignons verts', pt: 'Cebolinha', 'zh-CN': '葱', 'zh-TW': '蔥' }, category: 'vegetable', icon: '🧅' },
  { id: 'garlic', name: { en: 'Garlic', fr: 'Ail', pt: 'Alho', 'zh-CN': '大蒜', 'zh-TW': '大蒜' }, category: 'vegetable', icon: '🧄' },
  { id: 'ginger', name: { en: 'Ginger', fr: 'Gingembre', pt: 'Gengibre', 'zh-CN': '姜', 'zh-TW': '薑' }, category: 'vegetable', icon: '🫚' },
  { id: 'onion', name: { en: 'Onion', fr: 'Oignon', pt: 'Cebola', 'zh-CN': '洋葱', 'zh-TW': '洋蔥' }, category: 'vegetable', icon: '🧅' },
  { id: 'bell-pepper', name: { en: 'Bell Pepper', fr: 'Poivron', pt: 'Pimentão', 'zh-CN': '彩椒', 'zh-TW': '彩椒' }, category: 'vegetable', icon: '🫑' },
  { id: 'cucumber', name: { en: 'Cucumber', fr: 'Concombre', pt: 'Pepino', 'zh-CN': '黄瓜', 'zh-TW': '黃瓜' }, category: 'vegetable', icon: '🥒' },
  { id: 'broccoli', name: { en: 'Broccoli', fr: 'Brocoli', pt: 'Brócolis', 'zh-CN': '西兰花', 'zh-TW': '西蘭花' }, category: 'vegetable', icon: '🥦' },
  { id: 'green-beans', name: { en: 'Green Beans', fr: 'Haricots verts', pt: 'Vagens', 'zh-CN': '四季豆', 'zh-TW': '四季豆' }, category: 'vegetable', icon: '🫘' },
  { id: 'cilantro', name: { en: 'Cilantro', fr: 'Coriandre', pt: 'Coentro', 'zh-CN': '香菜', 'zh-TW': '香菜' }, category: 'vegetable', icon: '🌿' },
  { id: 'bamboo-shoots', name: { en: 'Bamboo Shoots', fr: 'Pousses de bambou', pt: 'Brotos de bambu', 'zh-CN': '笋', 'zh-TW': '筍' }, category: 'vegetable', icon: '🎋' },
  { id: 'wood-ear-mushroom', name: { en: 'Wood Ear Mushrooms', fr: 'Champignons noirs', pt: 'Cogumelos orelha-de-pau', 'zh-CN': '木耳', 'zh-TW': '木耳' }, category: 'vegetable', icon: '🍄' },
  { id: 'ya-cai', name: { en: 'Preserved Mustard Greens', fr: 'Moutarde conservée', pt: 'Mostarda em conserva', 'zh-CN': '芽菜', 'zh-TW': '芽菜' }, category: 'vegetable', icon: '🥬' },
  { id: 'mango', name: { en: 'Mango', fr: 'Mangue', pt: 'Manga', 'zh-CN': '芒果', 'zh-TW': '芒果' }, category: 'vegetable', icon: '🥭' },
  { id: 'eggplant', name: { en: 'Eggplant', fr: 'Aubergine', pt: 'Berinjela', 'zh-CN': '茄子', 'zh-TW': '茄子' }, category: 'vegetable', icon: '🍆' },
  { id: 'bean-sprouts', name: { en: 'Bean Sprouts', fr: 'Germes de soja', pt: 'Broto de feijão', 'zh-CN': '豆芽', 'zh-TW': '豆芽' }, category: 'vegetable', icon: '🌱' },
  { id: 'leek', name: { en: 'Leek', fr: 'Poireau', pt: 'Alho-poró', 'zh-CN': '韭菜', 'zh-TW': '韭菜' }, category: 'vegetable', icon: '🧅' },
  { id: 'carrot', name: { en: 'Carrot', fr: 'Carotte', pt: 'Cenoura', 'zh-CN': '胡萝卜', 'zh-TW': '胡蘿蔔' }, category: 'vegetable', icon: '🥕' },
  { id: 'corn', name: { en: 'Corn', fr: 'Maïs', pt: 'Milho', 'zh-CN': '玉米', 'zh-TW': '玉米' }, category: 'vegetable', icon: '🌽' },
  { id: 'peas', name: { en: 'Peas', fr: 'Petits pois', pt: 'Ervilhas', 'zh-CN': '豌豆', 'zh-TW': '豌豆' }, category: 'vegetable', icon: '🫛' },
  { id: 'asparagus', name: { en: 'Asparagus', fr: 'Asperges', pt: 'Aspargos', 'zh-CN': '芦笋', 'zh-TW': '蘆筍' }, category: 'vegetable', icon: '🌿' },
  { id: 'snow-peas', name: { en: 'Snow Peas', fr: 'Pois mange-tout', pt: 'Ervilha-torta', 'zh-CN': '荷兰豆', 'zh-TW': '荷蘭豆' }, category: 'vegetable', icon: '🫛' },
  { id: 'lemon', name: { en: 'Lemon', fr: 'Citron', pt: 'Limão', 'zh-CN': '柠檬', 'zh-TW': '檸檬' }, category: 'vegetable', icon: '🍋' },
  { id: 'pomelo', name: { en: 'Pomelo', fr: 'Pomelo', pt: 'Pomelo', 'zh-CN': '柚子', 'zh-TW': '柚子' }, category: 'vegetable', icon: '🍊' },
  { id: 'bok-choy', name: { en: 'Bok Choy', fr: 'Pak choï', pt: 'Bok choy', 'zh-CN': '小白菜', 'zh-TW': '小白菜' }, category: 'vegetable', icon: '🥬' },
  { id: 'chinese-cabbage', name: { en: 'Chinese Cabbage', fr: 'Chou chinois', pt: 'Repolho chinês', 'zh-CN': '大白菜', 'zh-TW': '大白菜' }, category: 'vegetable', icon: '🥬' },
  { id: 'mushroom-shiitake', name: { en: 'Shiitake Mushrooms', fr: 'Champignons shiitake', pt: 'Cogumelos shiitake', 'zh-CN': '香菇', 'zh-TW': '香菇' }, category: 'vegetable', icon: '🍄' },
  { id: 'lotus-root', name: { en: 'Lotus Root', fr: 'Racine de lotus', pt: 'Raiz de lótus', 'zh-CN': '莲藕', 'zh-TW': '蓮藕' }, category: 'vegetable', icon: '🪷' },
  { id: 'kelp', name: { en: 'Kelp', fr: 'Algue kombu', pt: 'Alga kelp', 'zh-CN': '海带', 'zh-TW': '海帶' }, category: 'vegetable', icon: '🌿' },

  // ── Grains ────────────────────────────────────
  { id: 'cooked-rice', name: { en: 'Cooked Rice', fr: 'Riz cuit', pt: 'Arroz cozido', 'zh-CN': '米饭', 'zh-TW': '米飯' }, category: 'grain', icon: '🍚' },
  { id: 'dried-noodles', name: { en: 'Noodles', fr: 'Nouilles', pt: 'Macarrão', 'zh-CN': '面条', 'zh-TW': '麵條' }, category: 'grain', icon: '🍜' },
  { id: 'sago', name: { en: 'Sago', fr: 'Sagou', pt: 'Sagu', 'zh-CN': '西米', 'zh-TW': '西米' }, category: 'grain', icon: '⚪' },
  { id: 'glutinous-rice-flour', name: { en: 'Glutinous Rice Flour', fr: 'Farine de riz gluant', pt: 'Farinha de arroz glutinoso', 'zh-CN': '糯米粉', 'zh-TW': '糯米粉' }, category: 'grain', icon: '🌾' },

  // ── Sauces & Condiments ───────────────────────
  { id: 'soy-sauce-light', name: { en: 'Light Soy Sauce', fr: 'Sauce soja claire', pt: 'Molho de soja claro', 'zh-CN': '生抽', 'zh-TW': '生抽' }, category: 'sauce', icon: '🫗' },
  { id: 'soy-sauce-dark', name: { en: 'Dark Soy Sauce', fr: 'Sauce soja foncée', pt: 'Molho de soja escuro', 'zh-CN': '老抽', 'zh-TW': '老抽' }, category: 'sauce', icon: '🫗' },
  { id: 'oyster-sauce', name: { en: 'Oyster Sauce', fr: "Sauce d'huître", pt: 'Molho de ostra', 'zh-CN': '蚝油', 'zh-TW': '蠔油' }, category: 'sauce', icon: '🦪' },
  { id: 'doubanjiang', name: { en: 'Doubanjiang', fr: 'Doubanjiang', pt: 'Doubanjiang', 'zh-CN': '豆瓣酱', 'zh-TW': '豆瓣醬' }, category: 'sauce', icon: '🌶️' },
  { id: 'rice-vinegar', name: { en: 'Rice Vinegar', fr: 'Vinaigre de riz', pt: 'Vinagre de arroz', 'zh-CN': '米醋', 'zh-TW': '米醋' }, category: 'sauce', icon: '🫗' },
  { id: 'sesame-paste', name: { en: 'Sesame Paste / Tahini', fr: 'Pâte de sésame / Tahini', pt: 'Pasta de gergelim / Tahine', 'zh-CN': '芝麻酱', 'zh-TW': '芝麻醬' }, category: 'sauce', icon: '🫙' },
  { id: 'shaoxing-wine', name: { en: 'Shaoxing Wine', fr: 'Vin de Shaoxing', pt: 'Vinho Shaoxing', 'zh-CN': '绍兴酒', 'zh-TW': '紹興酒' }, category: 'sauce', icon: '🍶' },
  { id: 'fermented-black-beans', name: { en: 'Fermented Black Beans', fr: 'Haricots noirs fermentés', pt: 'Feijão preto fermentado', 'zh-CN': '豆豉', 'zh-TW': '豆豉' }, category: 'sauce', icon: '🫘' },
  { id: 'sweet-bean-paste', name: { en: 'Sweet Bean Paste', fr: 'Pâte de haricots sucrée', pt: 'Pasta de feijão doce', 'zh-CN': '甜面酱', 'zh-TW': '甜麵醬' }, category: 'sauce', icon: '🫙' },
  { id: 'tomato-paste', name: { en: 'Tomato Paste', fr: 'Concentré de tomates', pt: 'Extrato de tomate', 'zh-CN': '番茄膏', 'zh-TW': '番茄膏' }, category: 'sauce', icon: '🍅' },

  // ── Spices ────────────────────────────────────
  { id: 'sichuan-peppercorn', name: { en: 'Sichuan Peppercorn', fr: 'Poivre du Sichuan', pt: 'Pimenta de Sichuan', 'zh-CN': '花椒', 'zh-TW': '花椒' }, category: 'spice', icon: '🌶️' },
  { id: 'dried-red-chili', name: { en: 'Dried Red Chilies', fr: 'Piments rouges séchés', pt: 'Pimentas vermelhas secas', 'zh-CN': '干辣椒', 'zh-TW': '乾辣椒' }, category: 'spice', icon: '🌶️' },
  { id: 'chili-flakes', name: { en: 'Chili Flakes', fr: 'Flocons de piment', pt: 'Flocos de pimenta', 'zh-CN': '辣椒碎', 'zh-TW': '辣椒碎' }, category: 'spice', icon: '🌶️' },
  { id: 'star-anise', name: { en: 'Star Anise', fr: 'Anis étoilé', pt: 'Anis-estrelado', 'zh-CN': '八角', 'zh-TW': '八角' }, category: 'spice', icon: '⭐' },
  { id: 'cinnamon-stick', name: { en: 'Cinnamon Stick', fr: 'Bâton de cannelle', pt: 'Pau de canela', 'zh-CN': '桂皮', 'zh-TW': '桂皮' }, category: 'spice', icon: '🪵' },
  { id: 'cumin-seeds', name: { en: 'Cumin Seeds', fr: 'Graines de cumin', pt: 'Sementes de cominho', 'zh-CN': '孜然粒', 'zh-TW': '孜然粒' }, category: 'spice', icon: '🫘' },
  { id: 'cumin-powder', name: { en: 'Cumin Powder', fr: 'Cumin en poudre', pt: 'Cominho em pó', 'zh-CN': '孜然粉', 'zh-TW': '孜然粉' }, category: 'spice', icon: '🫙' },

  // ── Oils ──────────────────────────────────────
  { id: 'vegetable-oil', name: { en: 'Vegetable Oil', fr: 'Huile végétale', pt: 'Óleo vegetal', 'zh-CN': '植物油', 'zh-TW': '植物油' }, category: 'oil', icon: '🫒' },
  { id: 'sesame-oil', name: { en: 'Sesame Oil', fr: 'Huile de sésame', pt: 'Óleo de gergelim', 'zh-CN': '麻油', 'zh-TW': '麻油' }, category: 'oil', icon: '🫗' },
  { id: 'chili-oil', name: { en: 'Chili Oil', fr: 'Huile de piment', pt: 'Óleo de pimenta', 'zh-CN': '辣椒油', 'zh-TW': '辣椒油' }, category: 'oil', icon: '🌶️' },

  // ── Other ─────────────────────────────────────
  { id: 'cornstarch', name: { en: 'Cornstarch', fr: 'Fécule de maïs', pt: 'Amido de milho', 'zh-CN': '淀粉', 'zh-TW': '澱粉' }, category: 'other', icon: '🥣' },
  { id: 'flour', name: { en: 'Flour', fr: 'Farine', pt: 'Farinha', 'zh-CN': '面粉', 'zh-TW': '麵粉' }, category: 'other', icon: '🌾' },
  { id: 'roasted-peanuts', name: { en: 'Roasted Peanuts', fr: 'Cacahuètes grillées', pt: 'Amendoins torrados', 'zh-CN': '炒花生', 'zh-TW': '炒花生' }, category: 'other', icon: '🥜' },
  { id: 'chicken-stock', name: { en: 'Chicken Stock', fr: 'Bouillon de poulet', pt: 'Caldo de galinha', 'zh-CN': '鸡汤', 'zh-TW': '雞湯' }, category: 'other', icon: '🍲' },
  { id: 'coconut-milk', name: { en: 'Coconut Milk', fr: 'Lait de coco', pt: 'Leite de coco', 'zh-CN': '椰奶', 'zh-TW': '椰奶' }, category: 'other', icon: '🥥' },
  { id: 'milk', name: { en: 'Milk', fr: 'Lait', pt: 'Leite', 'zh-CN': '牛奶', 'zh-TW': '牛奶' }, category: 'other', icon: '🥛' },
  { id: 'gelatin', name: { en: 'Gelatin', fr: 'Gélatine', pt: 'Gelatina', 'zh-CN': '吉利丁', 'zh-TW': '吉利丁' }, category: 'other', icon: '🍮' },
  { id: 'dried-red-dates', name: { en: 'Dried Red Dates', fr: 'Jujubes séchées', pt: 'Tâmaras vermelhas secas', 'zh-CN': '红枣', 'zh-TW': '紅棗' }, category: 'other', icon: '🫘' },
  { id: 'dried-shrimp', name: { en: 'Dried Shrimp', fr: 'Crevettes séchées', pt: 'Camarão seco', 'zh-CN': '虾米', 'zh-TW': '蝦米' }, category: 'other', icon: '🦐' },
  { id: 'white-fungus', name: { en: 'White Fungus', fr: 'Champignon blanc', pt: 'Fungo branco', 'zh-CN': '银耳', 'zh-TW': '銀耳' }, category: 'other', icon: '🍄' },
  { id: 'lotus-seeds', name: { en: 'Lotus Seeds', fr: 'Graines de lotus', pt: 'Sementes de lótus', 'zh-CN': '莲子', 'zh-TW': '蓮子' }, category: 'other', icon: '🪷' },
  { id: 'red-beans', name: { en: 'Red Beans', fr: 'Haricots rouges', pt: 'Feijão vermelho', 'zh-CN': '红豆', 'zh-TW': '紅豆' }, category: 'other', icon: '🫘' },
  { id: 'rock-sugar', name: { en: 'Rock Sugar', fr: 'Sucre cristal', pt: 'Açúcar cristal', 'zh-CN': '冰糖', 'zh-TW': '冰糖' }, category: 'other', icon: '🧊' },
  { id: 'osmanthus-flowers', name: { en: 'Osmanthus Flowers', fr: 'Fleurs d\'osmanthus', pt: 'Flores de osmanto', 'zh-CN': '桂花', 'zh-TW': '桂花' }, category: 'other', icon: '🌼' },
  { id: 'black-sesame', name: { en: 'Black Sesame', fr: 'Sésame noir', pt: 'Gergelim preto', 'zh-CN': '黑芝麻', 'zh-TW': '黑芝麻' }, category: 'other', icon: '⚫' },
  { id: 'goji-berries', name: { en: 'Goji Berries', fr: 'Baies de goji', pt: 'Bagas de goji', 'zh-CN': '枸杞', 'zh-TW': '枸杞' }, category: 'other', icon: '🔴' },
];

// Category labels for grouping in the picker UI
export const ingredientCategoryLabels: Record<IngredientCategory, Record<Language, string>> = {
  protein: { en: 'Proteins', fr: 'Protéines', pt: 'Proteínas', 'zh-CN': '蛋白质', 'zh-TW': '蛋白質' },
  vegetable: { en: 'Vegetables', fr: 'Légumes', pt: 'Legumes', 'zh-CN': '蔬菜', 'zh-TW': '蔬菜' },
  grain: { en: 'Grains', fr: 'Céréales', pt: 'Cereais', 'zh-CN': '主食', 'zh-TW': '主食' },
  sauce: { en: 'Sauces', fr: 'Sauces', pt: 'Molhos', 'zh-CN': '酱料', 'zh-TW': '醬料' },
  spice: { en: 'Spices', fr: 'Épices', pt: 'Especiarias', 'zh-CN': '香料', 'zh-TW': '香料' },
  oil: { en: 'Oils', fr: 'Huiles', pt: 'Óleos', 'zh-CN': '油', 'zh-TW': '油' },
  other: { en: 'Other', fr: 'Autre', pt: 'Outro', 'zh-CN': '其他', 'zh-TW': '其他' },
};
