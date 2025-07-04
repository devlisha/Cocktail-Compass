export type Language = 'en' | 'es' | 'de' | 'ru';

export interface TranslationKeys {
  // Header
  'header.title': string;
  'header.favorites': string;
  'header.language': string;
  'header.changeLanguage': string;
  'header.viewFavorites': string;
  
  // Favorites
  'favorites.title': string;
  'favorites.empty': string;
  
  // Daily Suggestion
  'daily.title': string;
  'daily.description': string;
  
  // Cocktail Library
  'library.title': string;
  'library.searchPlaceholder': string;
  'library.all': string;
  'library.notFound': string;
  
  // Cocktail Details
  'cocktail.ingredients': string;
  'cocktail.instructions': string;
  'cocktail.notFound': string;
  'cocktail.close': string;
  'cocktail.addToFavorites': string;
  'cocktail.removeFromFavorites': string;
  
  // Base Spirits
  'spirits.vodka': string;
  'spirits.gin': string;
  'spirits.rum': string;
  'spirits.tequila': string;
  'spirits.whiskey': string;
  'spirits.brandy': string;
  
  // Common
  'common.loading': string;
  'common.error': string;
  'common.retry': string;
  'common.back': string;
  'common.next': string;
  'common.previous': string;
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    // Header
    'header.title': 'Cocktail Compass',
    'header.favorites': 'Favorites',
    'header.language': 'Language',
    'header.changeLanguage': 'Change language',
    'header.viewFavorites': 'View favorites',
    
    // Favorites
    'favorites.title': 'Favorite Cocktails',
    'favorites.empty': 'You have no favorite cocktails yet.',
    
    // Daily Suggestion
    'daily.title': 'Cocktail of the Day',
    'daily.description': 'A delightful suggestion to brighten your day. Find the recipe below or explore other classics.',
    
    // Cocktail Library
    'library.title': 'Cocktail Library',
    'library.searchPlaceholder': 'Search for a cocktail...',
    'library.all': 'All',
    'library.notFound': 'No cocktails found. Try a different search!',
    
    // Cocktail Details
    'cocktail.ingredients': 'Ingredients',
    'cocktail.instructions': 'Instructions',
    'cocktail.notFound': 'Cocktail details not found.',
    'cocktail.close': 'Close',
    'cocktail.addToFavorites': 'Add to favorites',
    'cocktail.removeFromFavorites': 'Remove from favorites',
    
    // Base Spirits
    'spirits.vodka': 'Vodka',
    'spirits.gin': 'Gin',
    'spirits.rum': 'Rum',
    'spirits.tequila': 'Tequila',
    'spirits.whiskey': 'Whiskey',
    'spirits.brandy': 'Brandy',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.retry': 'Retry',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
  },
  es: {
    // Header
    'header.title': 'Cocktail Compass',
    'header.favorites': 'Favoritos',
    'header.language': 'Idioma',
    'header.changeLanguage': 'Cambiar idioma',
    'header.viewFavorites': 'Ver favoritos',
    
    // Favorites
    'favorites.title': 'Cócteles Favoritos',
    'favorites.empty': 'Aún no tienes cócteles favoritos.',
    
    // Daily Suggestion
    'daily.title': 'Cóctel del Día',
    'daily.description': 'Una sugerencia deliciosa para alegrar tu día. Encuentra la receta abajo o explora otros clásicos.',
    
    // Cocktail Library
    'library.title': 'Recetario de Cócteles',
    'library.searchPlaceholder': 'Buscar un cóctel...',
    'library.all': 'Todos',
    'library.notFound': '¡No se encontraron cócteles. Intenta una búsqueda diferente!',
    
    // Cocktail Details
    'cocktail.ingredients': 'Ingredientes',
    'cocktail.instructions': 'Instrucciones',
    'cocktail.notFound': 'No se encontraron los detalles del cóctel.',
    'cocktail.close': 'Cerrar',
    'cocktail.addToFavorites': 'Agregar a favoritos',
    'cocktail.removeFromFavorites': 'Quitar de favoritos',
    
    // Base Spirits
    'spirits.vodka': 'Vodka',
    'spirits.gin': 'Ginebra',
    'spirits.rum': 'Ron',
    'spirits.tequila': 'Tequila',
    'spirits.whiskey': 'Whisky',
    'spirits.brandy': 'Brandy',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Ocurrió un error',
    'common.retry': 'Reintentar',
    'common.back': 'Volver',
    'common.next': 'Siguiente',
    'common.previous': 'Anterior',
  },
  de: {
    // Header
    'header.title': 'Cocktail Compass',
    'header.favorites': 'Favoriten',
    'header.language': 'Sprache',
    'header.changeLanguage': 'Sprache ändern',
    'header.viewFavorites': 'Favoriten anzeigen',
    
    // Favorites
    'favorites.title': 'Lieblingscocktails',
    'favorites.empty': 'Du hast noch keine Lieblingscocktails.',
    
    // Daily Suggestion
    'daily.title': 'Cocktail des Tages',
    'daily.description': 'Ein herrlicher Vorschlag, um Ihren Tag zu erhellen. Finden Sie das Rezept unten oder entdecken Sie andere Klassiker.',
    
    // Cocktail Library
    'library.title': 'Cocktail-Bibliothek',
    'library.searchPlaceholder': 'Suche nach einem Cocktail...',
    'library.all': 'Alle',
    'library.notFound': 'Keine Cocktails gefunden. Versuchen Sie eine andere Suche!',
    
    // Cocktail Details
    'cocktail.ingredients': 'Zutaten',
    'cocktail.instructions': 'Anleitung',
    'cocktail.notFound': 'Cocktail-Details nicht gefunden.',
    'cocktail.close': 'Schließen',
    'cocktail.addToFavorites': 'Zu Favoriten hinzufügen',
    'cocktail.removeFromFavorites': 'Aus Favoriten entfernen',
    
    // Base Spirits
    'spirits.vodka': 'Wodka',
    'spirits.gin': 'Gin',
    'spirits.rum': 'Rum',
    'spirits.tequila': 'Tequila',
    'spirits.whiskey': 'Whisky',
    'spirits.brandy': 'Brandy',
    
    // Common
    'common.loading': 'Laden...',
    'common.error': 'Ein Fehler ist aufgetreten',
    'common.retry': 'Wiederholen',
    'common.back': 'Zurück',
    'common.next': 'Weiter',
    'common.previous': 'Vorherige',
  },
  ru: {
    // Header
    'header.title': 'Cocktail Compass',
    'header.favorites': 'Избранное',
    'header.language': 'Язык',
    'header.changeLanguage': 'Изменить язык',
    'header.viewFavorites': 'Посмотреть избранное',
    
    // Favorites
    'favorites.title': 'Избранные коктейли',
    'favorites.empty': 'У вас еще нет избранных коктейлей.',
    
    // Daily Suggestion
    'daily.title': 'Коктейль дня',
    'daily.description': 'Восхитительное предложение, чтобы скрасить ваш день. Найдите рецепт ниже или исследуйте другие классические коктейли.',
    
    // Cocktail Library
    'library.title': 'Библиотека коктейлей',
    'library.searchPlaceholder': 'Поиск коктейля...',
    'library.all': 'Все',
    'library.notFound': 'Коктейли не найдены. Попробуйте другой поиск!',
    
    // Cocktail Details
    'cocktail.ingredients': 'Ингредиенты',
    'cocktail.instructions': 'Инструкции',
    'cocktail.notFound': 'Детали коктейля не найдены.',
    'cocktail.close': 'Закрыть',
    'cocktail.addToFavorites': 'Добавить в избранное',
    'cocktail.removeFromFavorites': 'Удалить из избранного',
    
    // Base Spirits
    'spirits.vodka': 'Водка',
    'spirits.gin': 'Джин',
    'spirits.rum': 'Ром',
    'spirits.tequila': 'Текила',
    'spirits.whiskey': 'Виски',
    'spirits.brandy': 'Бренди',
    
    // Common
    'common.loading': 'Загрузка...',
    'common.error': 'Произошла ошибка',
    'common.retry': 'Повторить',
    'common.back': 'Назад',
    'common.next': 'Далее',
    'common.previous': 'Предыдущий',
  },
};

export function getTranslation(
  language: Language,
  key: keyof TranslationKeys
): string {
  return translations[language][key] || translations.en[key] || key;
}

export function useTranslation(language: Language) {
  return {
    t: (key: keyof TranslationKeys) => getTranslation(language, key),
    language,
  };
}

// Language configurations
export const languageConfig = {
  en: {
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    dir: 'ltr',
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    dir: 'ltr',
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    dir: 'ltr',
  },
  ru: {
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    dir: 'ltr',
  },
} as const;

export const supportedLanguages = Object.keys(languageConfig) as Language[];

// Detect user's preferred language
export function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  
  const stored = localStorage.getItem('cocktailLanguage') as Language;
  if (stored && supportedLanguages.includes(stored)) {
    return stored;
  }
  
  const browserLang = navigator.language.split('-')[0] as Language;
  if (supportedLanguages.includes(browserLang)) {
    return browserLang;
  }
  
  return 'en';
}
