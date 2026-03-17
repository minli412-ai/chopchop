import type { LocalizedString } from '../types/recipe';

export interface BannedIngredient {
  id: string;
  name: LocalizedString;
  chineseName: string;
  reason: LocalizedString;
  alternative: LocalizedString;
  alternativeDetails: LocalizedString;
}

export interface UpgradeIngredient {
  id: string;
  commonVersion: LocalizedString;
  traditionalUpgrade: LocalizedString;
  details: LocalizedString;
}

export const bannedIngredients: BannedIngredient[] = [
  {
    id: 'ketchup',
    name: { en: 'Ketchup', fr: 'Ketchup', pt: 'Ketchup', 'zh-CN': '番茄酱', 'zh-TW': '番茄醬' },
    chineseName: '番茄酱',
    reason: { en: 'Western processed condiment', fr: 'Condiment transformé occidental', pt: 'Condimento processado ocidental', 'zh-CN': '西式加工调味品', 'zh-TW': '西式加工調味品' },
    alternative: { en: 'Fresh tomatoes', fr: 'Tomates fraîches', pt: 'Tomates frescos', 'zh-CN': '新鲜番茄', 'zh-TW': '新鮮番茄' },
    alternativeDetails: {
      en: 'Use ripe tomatoes blanched and pureed, or a small amount of tomato paste (番茄膏). The natural sweetness and acidity of fresh tomatoes is what traditional Chinese recipes rely on.',
      fr: 'Utilisez des tomates mûres blanchies et réduites en purée, ou une petite quantité de concentré de tomates (番茄膏). La douceur et l\'acidité naturelles des tomates fraîches sont la base des recettes traditionnelles.',
      pt: 'Use tomates maduros escaldados e em purê, ou uma pequena quantidade de extrato de tomate (番茄膏). A doçura e acidez naturais dos tomates frescos são a base das receitas tradicionais.',
      'zh-CN': '用熟番茄焯水去皮打成泥，或少量番茄膏。传统中式烹饪依赖的是新鲜番茄的天然甜味和酸度。',
      'zh-TW': '用熟番茄汆燙去皮打成泥，或少量番茄膏。傳統中式烹飪依賴的是新鮮番茄的天然甜味和酸度。',
    },
  },
  {
    id: 'msg',
    name: { en: 'MSG', fr: 'MSG', pt: 'MSG', 'zh-CN': '味精', 'zh-TW': '味精' },
    chineseName: '味精',
    reason: { en: 'Processed flavor enhancer', fr: 'Exhausteur de goût transformé', pt: 'Intensificador de sabor processado', 'zh-CN': '加工增味剂', 'zh-TW': '加工增味劑' },
    alternative: { en: 'Natural umami sources', fr: 'Sources naturelles d\'umami', pt: 'Fontes naturais de umami', 'zh-CN': '天然鲜味来源', 'zh-TW': '天然鮮味來源' },
    alternativeDetails: {
      en: 'Use dried shiitake mushroom powder (蘑菇粉), dried shrimp (虾皮), quality light soy sauce, or homemade chicken stock (鸡汤) for natural umami depth.',
      fr: 'Utilisez de la poudre de champignons shiitake séchés (蘑菇粉), des crevettes séchées (虾皮), une sauce soja claire de qualité ou un bouillon de poulet maison (鸡汤).',
      pt: 'Use pó de cogumelos shiitake secos (蘑菇粉), camarão seco (虾皮), molho de soja claro de qualidade ou caldo de galinha caseiro (鸡汤).',
      'zh-CN': '用干香菇粉（蘑菇粉）、虾皮、优质生抽或自制鸡汤来提鲜。',
      'zh-TW': '用乾香菇粉（蘑菇粉）、蝦皮、優質生抽或自製雞湯來提鮮。',
    },
  },
  {
    id: 'hoisin-sauce',
    name: { en: 'Hoisin sauce', fr: 'Sauce hoisin', pt: 'Molho hoisin', 'zh-CN': '海鲜酱', 'zh-TW': '海鮮醬' },
    chineseName: '海鲜酱',
    reason: { en: 'Factory-produced with preservatives', fr: 'Produit industriel avec conservateurs', pt: 'Produzido em fábrica com conservantes', 'zh-CN': '工厂加工，含防腐剂', 'zh-TW': '工廠加工，含防腐劑' },
    alternative: { en: 'Sweet bean paste (甜面酱)', fr: 'Pâte de haricots sucrée (甜面酱)', pt: 'Pasta de feijão doce (甜面酱)', 'zh-CN': '甜面酱', 'zh-TW': '甜麵醬' },
    alternativeDetails: {
      en: 'Traditional fermented paste from wheat and soybeans. Used in Beijing\'s 炸酱面 and many Northern dishes.',
      fr: 'Pâte fermentée traditionnelle à base de blé et de soja. Utilisée dans les 炸酱面 de Pékin et de nombreux plats du Nord.',
      pt: 'Pasta fermentada tradicional de trigo e soja. Usada no 炸酱面 de Pequim e em muitos pratos do Norte.',
      'zh-CN': '传统的小麦和大豆发酵酱。北京炸酱面和许多北方菜肴的重要调料。',
      'zh-TW': '傳統的小麥和大豆發酵醬。北京炸醬麵和許多北方菜餚的重要調料。',
    },
  },
  {
    id: 'sriracha',
    name: { en: 'Sriracha', fr: 'Sriracha', pt: 'Sriracha', 'zh-CN': 'Sriracha辣酱', 'zh-TW': 'Sriracha辣醬' },
    chineseName: 'Sriracha辣酱',
    reason: { en: 'Thai-American, not Chinese', fr: 'Thaï-américain, non chinois', pt: 'Tailandês-americano, não chinês', 'zh-CN': '泰式美式辣酱，非中式', 'zh-TW': '泰式美式辣醬，非中式' },
    alternative: { en: 'Chili oil (辣椒油) or doubanjiang (豆瓣酱)', fr: 'Huile de piment (辣椒油) ou doubanjiang (豆瓣酱)', pt: 'Óleo de pimenta (辣椒油) ou doubanjiang (豆瓣酱)', 'zh-CN': '辣椒油或豆瓣酱', 'zh-TW': '辣椒油或豆瓣醬' },
    alternativeDetails: {
      en: 'Homemade chili oil is easy: heat oil and pour over dried chili flakes with sesame seeds. Doubanjiang adds fermented depth.',
      fr: 'L\'huile de piment maison est facile : chauffez l\'huile et versez-la sur des flocons de piment avec des graines de sésame. Le doubanjiang apporte une profondeur fermentée.',
      pt: 'Óleo de pimenta caseiro é fácil: aqueça o óleo e despeje sobre flocos de pimenta com sementes de gergelim. Doubanjiang adiciona profundidade fermentada.',
      'zh-CN': '自制辣椒油很简单：把油烧热浇在干辣椒碎和芝麻上。豆瓣酱能增添发酵的醇厚。',
      'zh-TW': '自製辣椒油很簡單：把油燒熱澆在乾辣椒碎和芝麻上。豆瓣醬能增添發酵的醇厚。',
    },
  },
  {
    id: 'sweet-chili-sauce',
    name: { en: 'Sweet chili sauce', fr: 'Sauce piment douce', pt: 'Molho de pimenta doce', 'zh-CN': '甜辣酱', 'zh-TW': '甜辣醬' },
    chineseName: '甜辣酱',
    reason: { en: 'Thai-origin processed', fr: 'D\'origine thaïe, transformé', pt: 'De origem tailandesa, processado', 'zh-CN': '泰式加工产品', 'zh-TW': '泰式加工產品' },
    alternative: { en: 'Fresh chili + sugar + vinegar', fr: 'Piment frais + sucre + vinaigre', pt: 'Pimenta fresca + açúcar + vinagre', 'zh-CN': '鲜辣椒 + 糖 + 醋', 'zh-TW': '鮮辣椒 + 糖 + 醋' },
    alternativeDetails: {
      en: 'Mince fresh chilies, cook briefly with sugar and rice vinegar to make a quick authentic dipping sauce.',
      fr: 'Hachez des piments frais, faites cuire brièvement avec du sucre et du vinaigre de riz pour une sauce authentique rapide.',
      pt: 'Pique pimentas frescas, cozinhe brevemente com açúcar e vinagre de arroz para um molho autêntico rápido.',
      'zh-CN': '将新鲜辣椒切碎，加糖和米醋快速翻炒，就是一道正宗的蘸酱。',
      'zh-TW': '將新鮮辣椒切碎，加糖和米醋快速翻炒，就是一道正宗的蘸醬。',
    },
  },
  {
    id: 'teriyaki-sauce',
    name: { en: 'Teriyaki sauce', fr: 'Sauce teriyaki', pt: 'Molho teriyaki', 'zh-CN': '照烧酱', 'zh-TW': '照燒醬' },
    chineseName: '照烧酱',
    reason: { en: 'Japanese-origin commercial', fr: 'D\'origine japonaise, commercial', pt: 'De origem japonesa, comercial', 'zh-CN': '日式商业酱料', 'zh-TW': '日式商業醬料' },
    alternative: { en: 'Soy sauce + sugar + Shaoxing wine', fr: 'Sauce soja + sucre + vin de Shaoxing', pt: 'Molho de soja + açúcar + vinho Shaoxing', 'zh-CN': '生抽 + 糖 + 绍兴酒', 'zh-TW': '生抽 + 糖 + 紹興酒' },
    alternativeDetails: {
      en: 'Heat equal parts soy sauce and sugar with a splash of Shaoxing wine until syrupy. This is the traditional Chinese 红烧汁 (braising sauce).',
      fr: 'Chauffez à parts égales sauce soja et sucre avec un trait de vin de Shaoxing jusqu\'à obtenir un sirop. C\'est la 红烧汁 traditionnelle chinoise.',
      pt: 'Aqueça partes iguais de molho de soja e açúcar com um pouco de vinho Shaoxing até ficar em calda. Este é o tradicional 红烧汁 chinês.',
      'zh-CN': '等量的生抽和糖加少许绍兴酒，加热至浓稠。这就是传统的红烧汁。',
      'zh-TW': '等量的生抽和糖加少許紹興酒，加熱至濃稠。這就是傳統的紅燒汁。',
    },
  },
  {
    id: 'premade-stir-fry-sauce',
    name: { en: 'Pre-made stir-fry sauces', fr: 'Sauces pour sauté préparées', pt: 'Molhos prontos para refogado', 'zh-CN': '预制炒菜酱', 'zh-TW': '預製炒菜醬' },
    chineseName: '预制炒菜酱',
    reason: { en: 'Processed, generic', fr: 'Transformé, générique', pt: 'Processado, genérico', 'zh-CN': '加工产品，味道单一', 'zh-TW': '加工產品，味道單一' },
    alternative: { en: 'Build from base ingredients', fr: 'Préparer avec des ingrédients de base', pt: 'Preparar com ingredientes base', 'zh-CN': '用基础调料自己调配', 'zh-TW': '用基礎調料自己調配' },
    alternativeDetails: {
      en: 'Every stir-fry sauce is just a combination of: soy sauce, rice vinegar, Shaoxing wine, sugar, sesame oil, and aromatics (garlic, ginger, spring onion).',
      fr: 'Chaque sauce est simplement : sauce soja, vinaigre de riz, vin de Shaoxing, sucre, huile de sésame et aromates (ail, gingembre, oignon vert).',
      pt: 'Cada molho é apenas: molho de soja, vinagre de arroz, vinho Shaoxing, açúcar, óleo de gergelim e aromáticos (alho, gengibre, cebolinha).',
      'zh-CN': '所有炒菜酱汁都是基础调料的组合：生抽、米醋、绍兴酒、糖、麻油，加上蒜、姜、葱等香料。',
      'zh-TW': '所有炒菜醬汁都是基礎調料的組合：生抽、米醋、紹興酒、糖、麻油，加上蒜、薑、蔥等香料。',
    },
  },
  {
    id: 'bouillon',
    name: { en: 'Bouillon cubes/powder', fr: 'Cubes/poudre de bouillon', pt: 'Cubos/pó de caldo', 'zh-CN': '浓汤宝/鸡精', 'zh-TW': '濃湯寶/雞精' },
    chineseName: '浓汤宝/鸡精',
    reason: { en: 'Artificial, high sodium', fr: 'Artificiel, riche en sodium', pt: 'Artificial, alto em sódio', 'zh-CN': '人工合成，钠含量高', 'zh-TW': '人工合成，鈉含量高' },
    alternative: { en: 'Homemade bone broth (骨汤)', fr: 'Bouillon d\'os maison (骨汤)', pt: 'Caldo de osso caseiro (骨汤)', 'zh-CN': '自制骨汤', 'zh-TW': '自製骨湯' },
    alternativeDetails: {
      en: 'Simmer pork or chicken bones for 1-2 hours with ginger and spring onion. Freeze in portions. Or use dried mushroom soaking liquid for vegetarian umami.',
      fr: 'Faites mijoter des os 1-2 heures avec du gingembre et de l\'oignon vert. Congelez en portions. Ou utilisez le liquide de trempage des champignons séchés.',
      pt: 'Cozinhe ossos em fogo baixo por 1-2 horas com gengibre e cebolinha. Congele em porções. Ou use o líquido de molho dos cogumelos secos.',
      'zh-CN': '猪骨或鸡骨加姜和葱，小火炖1-2小时。分装冷冻备用。素食者可用干香菇泡发水提鲜。',
      'zh-TW': '豬骨或雞骨加薑和蔥，小火燉1-2小時。分裝冷凍備用。素食者可用乾香菇泡發水提鮮。',
    },
  },
  {
    id: 'corn-syrup',
    name: { en: 'Corn syrup', fr: 'Sirop de maïs', pt: 'Xarope de milho', 'zh-CN': '玉米糖浆', 'zh-TW': '玉米糖漿' },
    chineseName: '玉米糖浆',
    reason: { en: 'Processed sweetener', fr: 'Édulcorant transformé', pt: 'Adoçante processado', 'zh-CN': '加工甜味剂', 'zh-TW': '加工甜味劑' },
    alternative: { en: 'Rock sugar (冰糖)', fr: 'Sucre cristal (冰糖)', pt: 'Açúcar cristal (冰糖)', 'zh-CN': '冰糖', 'zh-TW': '冰糖' },
    alternativeDetails: {
      en: 'Traditional Chinese sweetener for braised dishes and desserts. Dissolves slowly, gives a glossy finish to sauces. Available at Asian grocery stores.',
      fr: 'Édulcorant chinois traditionnel pour plats braisés et desserts. Se dissout lentement, donne un fini brillant aux sauces.',
      pt: 'Adoçante chinês tradicional para pratos braseados e sobremesas. Dissolve lentamente, dá acabamento brilhante aos molhos.',
      'zh-CN': '传统中式甜味剂，用于红烧和甜品。溶解缓慢，能让酱汁更有光泽。在亚洲超市可以买到。',
      'zh-TW': '傳統中式甜味劑，用於紅燒和甜品。溶解緩慢，能讓醬汁更有光澤。在亞洲超市可以買到。',
    },
  },
];

export const upgradeIngredients: UpgradeIngredient[] = [
  {
    id: 'five-spice-powder',
    commonVersion: { en: 'Five-spice powder (五香粉)', fr: 'Poudre cinq-épices (五香粉)', pt: 'Pó cinco-especiarias (五香粉)', 'zh-CN': '五香粉', 'zh-TW': '五香粉' },
    traditionalUpgrade: { en: 'Whole spices, freshly ground', fr: 'Épices entières, fraîchement moulues', pt: 'Especiarias inteiras, moídas na hora', 'zh-CN': '整粒香料，现磨现用', 'zh-TW': '整粒香料，現磨現用' },
    details: {
      en: 'Toast whole star anise (八角), cinnamon bark (桂皮), Sichuan peppercorn (花椒), cloves (丁香), and fennel seeds (小茴香) in a dry pan. Grind just before use. Dramatically more aromatic than pre-ground powder. Store whole spices in sealed jars — they keep their aroma for months.',
      fr: 'Faites griller des étoiles de badiane (八角), de l\'écorce de cannelle (桂皮), du poivre du Sichuan (花椒), des clous de girofle (丁香) et des graines de fenouil (小茴香) dans une poêle sèche. Moulez juste avant utilisation. Bien plus aromatique que la poudre.',
      pt: 'Torre anis-estrelado (八角), casca de canela (桂皮), pimenta de Sichuan (花椒), cravos (丁香) e sementes de funcho (小茴香) em panela seca. Moa na hora. Muito mais aromático que o pó.',
      'zh-CN': '在干锅中焙香整粒八角、桂皮、花椒、丁香和小茴香，现磨现用。比预磨粉香气浓郁得多。整粒香料密封保存，可保持数月香气。',
      'zh-TW': '在乾鍋中焙香整粒八角、桂皮、花椒、丁香和小茴香，現磨現用。比預磨粉香氣濃郁得多。整粒香料密封保存，可保持數月香氣。',
    },
  },
];
