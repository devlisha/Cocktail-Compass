import { Language } from './i18n';

// Common ingredient translations
export const ingredientTranslations: Record<string, Record<Language, string>> = {
  // Spirits
  'Vodka': { en: 'Vodka', es: 'Vodka', de: 'Wodka', ru: 'Водка' },
  'Gin': { en: 'Gin', es: 'Ginebra', de: 'Gin', ru: 'Джин' },
  'Rum': { en: 'Rum', es: 'Ron', de: 'Rum', ru: 'Ром' },
  'White rum': { en: 'White rum', es: 'Ron blanco', de: 'Weißer Rum', ru: 'Белый ром' },
  'Dark rum': { en: 'Dark rum', es: 'Ron oscuro', de: 'Dunkler Rum', ru: 'Темный ром' },
  'Tequila': { en: 'Tequila', es: 'Tequila', de: 'Tequila', ru: 'Текила' },
  'Whiskey': { en: 'Whiskey', es: 'Whisky', de: 'Whisky', ru: 'Виски' },
  'Bourbon': { en: 'Bourbon', es: 'Bourbon', de: 'Bourbon', ru: 'Бурбон' },
  'Brandy': { en: 'Brandy', es: 'Brandy', de: 'Brandy', ru: 'Бренди' },
  'Cognac': { en: 'Cognac', es: 'Coñac', de: 'Cognac', ru: 'Коньяк' },
  
  // Liqueurs
  'Triple sec': { en: 'Triple sec', es: 'Triple sec', de: 'Triple Sec', ru: 'Трипл сек' },
  'Cointreau': { en: 'Cointreau', es: 'Cointreau', de: 'Cointreau', ru: 'Куантро' },
  'Kahlua': { en: 'Kahlua', es: 'Kahlúa', de: 'Kahlúa', ru: 'Калуа' },
  'Sambuca': { en: 'Sambuca', es: 'Sambuca', de: 'Sambuca', ru: 'Самбука' },
  'Amaretto': { en: 'Amaretto', es: 'Amaretto', de: 'Amaretto', ru: 'Амаретто' },
  
  // Mixers
  'Lime juice': { en: 'Lime juice', es: 'Jugo de lima', de: 'Limettensaft', ru: 'Сок лайма' },
  'Lemon juice': { en: 'Lemon juice', es: 'Jugo de limón', de: 'Zitronensaft', ru: 'Лимонный сок' },
  'Orange juice': { en: 'Orange juice', es: 'Jugo de naranja', de: 'Orangensaft', ru: 'Апельсиновый сок' },
  'Cranberry juice': { en: 'Cranberry juice', es: 'Jugo de arándano', de: 'Preiselbeersaft', ru: 'Клюквенный сок' },
  'Pineapple juice': { en: 'Pineapple juice', es: 'Jugo de piña', de: 'Ananassaft', ru: 'Ананасовый сок' },
  'Tomato juice': { en: 'Tomato juice', es: 'Jugo de tomate', de: 'Tomatensaft', ru: 'Томатный сок' },
  'Grapefruit juice': { en: 'Grapefruit juice', es: 'Jugo de toronja', de: 'Grapefruitsaft', ru: 'Грейпфрутовый сок' },
  
  // Sodas and Waters
  'Club soda': { en: 'Club soda', es: 'Agua con gas', de: 'Sodawasser', ru: 'Содовая' },
  'Soda water': { en: 'Soda water', es: 'Agua con gas', de: 'Sodawasser', ru: 'Содовая вода' },
  'Tonic water': { en: 'Tonic water', es: 'Agua tónica', de: 'Tonic Water', ru: 'Тоник' },
  'Ginger ale': { en: 'Ginger ale', es: 'Ginger ale', de: 'Ingwer-Ale', ru: 'Имбирный эль' },
  'Ginger beer': { en: 'Ginger beer', es: 'Cerveza de jengibre', de: 'Ingwerbier', ru: 'Имбирное пиво' },
  'Coca-Cola': { en: 'Coca-Cola', es: 'Coca-Cola', de: 'Coca-Cola', ru: 'Кока-Кола' },
  'Sprite': { en: 'Sprite', es: 'Sprite', de: 'Sprite', ru: 'Спрайт' },
  
  // Syrups and Sweeteners
  'Simple syrup': { en: 'Simple syrup', es: 'Jarabe simple', de: 'Läuterzucker', ru: 'Простой сироп' },
  'Grenadine': { en: 'Grenadine', es: 'Granadina', de: 'Grenadine', ru: 'Гренадин' },
  'Sugar': { en: 'Sugar', es: 'Azúcar', de: 'Zucker', ru: 'Сахар' },
  'Brown sugar': { en: 'Brown sugar', es: 'Azúcar moreno', de: 'Brauner Zucker', ru: 'Коричневый сахар' },
  'Honey': { en: 'Honey', es: 'Miel', de: 'Honig', ru: 'Мед' },
  'Agave syrup': { en: 'Agave syrup', es: 'Jarabe de agave', de: 'Agavensirup', ru: 'Сироп агавы' },
  
  // Bitters and Spices
  'Angostura bitters': { en: 'Angostura bitters', es: 'Amargo de angostura', de: 'Angostura-Bitter', ru: 'Ангостура биттерс' },
  'Orange bitters': { en: 'Orange bitters', es: 'Amargo de naranja', de: 'Orangen-Bitter', ru: 'Апельсиновые биттерс' },
  'Salt': { en: 'Salt', es: 'Sal', de: 'Salz', ru: 'Соль' },
  'Pepper': { en: 'Pepper', es: 'Pimienta', de: 'Pfeffer', ru: 'Перец' },
  'Celery salt': { en: 'Celery salt', es: 'Sal de apio', de: 'Selleriesalz', ru: 'Сельдерейная соль' },
  'Tabasco sauce': { en: 'Tabasco sauce', es: 'Salsa Tabasco', de: 'Tabasco-Sauce', ru: 'Соус Табаско' },
  'Worcestershire sauce': { en: 'Worcestershire sauce', es: 'Salsa inglesa', de: 'Worcestershire-Sauce', ru: 'Вустерширский соус' },
  
  // Garnishes
  'Lime': { en: 'Lime', es: 'Lima', de: 'Limette', ru: 'Лайм' },
  'Lemon': { en: 'Lemon', es: 'Limón', de: 'Zitrone', ru: 'Лимон' },
  'Orange': { en: 'Orange', es: 'Naranja', de: 'Orange', ru: 'Апельсин' },
  'Cherry': { en: 'Cherry', es: 'Cereza', de: 'Kirsche', ru: 'Вишня' },
  'Maraschino cherry': { en: 'Maraschino cherry', es: 'Cereza marrasquino', de: 'Maraschinokirsche', ru: 'Вишня мараскино' },
  'Olive': { en: 'Olive', es: 'Aceituna', de: 'Olive', ru: 'Оливка' },
  'Mint': { en: 'Mint', es: 'Menta', de: 'Minze', ru: 'Мята' },
  'Basil': { en: 'Basil', es: 'Albahaca', de: 'Basilikum', ru: 'Базилик' },
  'Rosemary': { en: 'Rosemary', es: 'Romero', de: 'Rosmarin', ru: 'Розмарин' },
  'Thyme': { en: 'Thyme', es: 'Tomillo', de: 'Thymian', ru: 'Тимьян' },
  
  // Dairy and Creams
  'Milk': { en: 'Milk', es: 'Leche', de: 'Milch', ru: 'Молоко' },
  'Cream': { en: 'Cream', es: 'Crema', de: 'Sahne', ru: 'Сливки' },
  'Heavy cream': { en: 'Heavy cream', es: 'Crema espesa', de: 'Schlagsahne', ru: 'Густые сливки' },
  'Half-and-half': { en: 'Half-and-half', es: 'Mitad y mitad', de: 'Halbfett-Sahne', ru: 'Полужирные сливки' },
  'Coconut cream': { en: 'Coconut cream', es: 'Crema de coco', de: 'Kokosnusscreme', ru: 'Кокосовые сливки' },
  
  // Ice and Water
  'Ice': { en: 'Ice', es: 'Hielo', de: 'Eis', ru: 'Лед' },
  'Water': { en: 'Water', es: 'Agua', de: 'Wasser', ru: 'Вода' },
  'Hot water': { en: 'Hot water', es: 'Agua caliente', de: 'Heißes Wasser', ru: 'Горячая вода' },
  'Cold water': { en: 'Cold water', es: 'Agua fría', de: 'Kaltes Wasser', ru: 'Холодная вода' },
  
  // Beer and Wine
  'Beer': { en: 'Beer', es: 'Cerveza', de: 'Bier', ru: 'Пиво' },
  'Wine': { en: 'Wine', es: 'Vino', de: 'Wein', ru: 'Вино' },
  'Red wine': { en: 'Red wine', es: 'Vino tinto', de: 'Rotwein', ru: 'Красное вино' },
  'White wine': { en: 'White wine', es: 'Vino blanco', de: 'Weißwein', ru: 'Белое вино' },
  'Champagne': { en: 'Champagne', es: 'Champán', de: 'Champagner', ru: 'Шампанское' },
  'Prosecco': { en: 'Prosecco', es: 'Prosecco', de: 'Prosecco', ru: 'Просекко' },
};

// Function to get translated ingredient name
export function getTranslatedIngredient(ingredient: string, language: Language): string {
  // Try exact match first
  if (ingredientTranslations[ingredient]) {
    return ingredientTranslations[ingredient][language] || ingredient;
  }
  
  // Try case-insensitive match
  const lowerIngredient = ingredient.toLowerCase();
  for (const [key, translations] of Object.entries(ingredientTranslations)) {
    if (key.toLowerCase() === lowerIngredient) {
      return translations[language] || ingredient;
    }
  }
  
  // Return original if no translation found
  return ingredient;
}
