import { Language } from '@/lib/i18n';
import { getTranslatedIngredient } from '@/lib/ingredient-translations';

export type { Language };

type TranslatedString = {
  [key in Language]: string;
};

export type Ingredient = {
  name: TranslatedString;
  amount: string;
};

// This is the full cocktail object with all details
export type Cocktail = {
  id: string;
  name: TranslatedString;
  ingredients: Ingredient[];
  instructions: TranslatedString;
  image: string;
  tags: TranslatedString[];
  baseSpirit: string; // This might be a best-guess based on category or first ingredient
};

// This is a summary for list views
export type CocktailSummary = {
  id: string;
  name: string; // Just one name for summary
  image: string;
  baseSpirit: string;
};

// Helper to map the raw API drink object to our detailed Cocktail type
function mapApiDrinkToCocktail(drink: any): Cocktail {
  const ingredients: Ingredient[] = [];
  for (let i = 1; i <= 15; i++) {
    const ingredientName = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    if (ingredientName) {
      ingredients.push({
        name: { 
          en: ingredientName, 
          es: getTranslatedIngredient(ingredientName, 'es'),
          de: getTranslatedIngredient(ingredientName, 'de'),
          ru: getTranslatedIngredient(ingredientName, 'ru'),
        },
        amount: measure ? measure.trim() : '',
      });
    }
  }

  const tags = drink.strTags
    ? drink.strTags.split(',').map((tag: string) => ({ 
        en: tag.trim(), 
        es: tag.trim(), 
        de: tag.trim(), 
        ru: tag.trim() 
      }))
    : [];

  return {
    id: drink.idDrink,
    name: { 
      en: drink.strDrink, 
      es: drink.strDrink,
      de: drink.strDrink,
      ru: drink.strDrink,
    },
    ingredients,
    instructions: {
      en: drink.strInstructions || '',
      es: drink.strInstructionsES || drink.strInstructions || '',
      de: drink.strInstructionsDE || drink.strInstructions || '',
      ru: drink.strInstructions || '', // No RU translation available in API
    },
    image: drink.strDrinkThumb,
    tags,
    baseSpirit: drink.strCategory || 'Unknown', // Best effort
  };
}

const API_BASE = 'https://www.thecocktaildb.com/api/json/v1/1';

// Fetches a default list of cocktails (e.g., starting with 'm')
export async function getCocktails(): Promise<CocktailSummary[]> {
  try {
    const response = await fetch(`${API_BASE}/search.php?f=m`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return (data.drinks || []).map((drink: any) => ({
      id: drink.idDrink,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      baseSpirit: drink.strCategory,
    }));
  } catch (error) {
    console.error('Failed to fetch cocktails:', error);
    return [];
  }
}

// Fetches full details for a single cocktail by its ID
export async function getCocktailById(id: string): Promise<Cocktail | null> {
  try {
    const response = await fetch(`${API_BASE}/lookup.php?i=${id}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    if (data.drinks && data.drinks.length > 0) {
      return mapApiDrinkToCocktail(data.drinks[0]);
    }
    return null;
  } catch (error) {
    console.error(`Failed to fetch cocktail by ID ${id}:`, error);
    return null;
  }
}

// Fetches a random cocktail for the "Cocktail of the Day" feature
export async function getDailyCocktail(): Promise<Cocktail | null> {
  try {
    const response = await fetch(`${API_BASE}/random.php`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    if (data.drinks && data.drinks.length > 0) {
      return mapApiDrinkToCocktail(data.drinks[0]);
    }
    return null;
  } catch (error) {
    console.error('Failed to fetch daily cocktail:', error);
    return null;
  }
}

// Searches for cocktails by name
export async function searchCocktails(query: string): Promise<CocktailSummary[]> {
  if (!query) return getCocktails();
  try {
    const response = await fetch(`${API_BASE}/search.php?s=${query}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return (data.drinks || []).map((drink: any) => ({
      id: drink.idDrink,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      baseSpirit: drink.strCategory,
    }));
  } catch (error) {
    console.error(`Failed to search cocktails for "${query}":`, error);
    return [];
  }
}

// Fetches cocktails by a base spirit
export async function getCocktailsBySpirit(spirit: string): Promise<CocktailSummary[]> {
  try {
    const response = await fetch(`${API_BASE}/filter.php?i=${spirit}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return (data.drinks || []).map((drink: any) => ({
      id: drink.idDrink,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      baseSpirit: spirit, // We know the spirit since we filtered by it
    }));
  } catch (error) {
    console.error(`Failed to fetch cocktails for spirit "${spirit}":`, error);
    return [];
  }
}

// This list is now for UI filtering buttons only
export const baseSpirits = ['Vodka', 'Gin', 'Rum', 'Tequila', 'Whiskey', 'Brandy'];

// Helper function to get translated spirit names
export function getTranslatedSpirit(spirit: string, language: Language): string {
  const spiritTranslations: Record<string, Record<Language, string>> = {
    'Vodka': { en: 'Vodka', es: 'Vodka', de: 'Wodka', ru: 'Водка' },
    'Gin': { en: 'Gin', es: 'Ginebra', de: 'Gin', ru: 'Джин' },
    'Rum': { en: 'Rum', es: 'Ron', de: 'Rum', ru: 'Ром' },
    'Tequila': { en: 'Tequila', es: 'Tequila', de: 'Tequila', ru: 'Текила' },
    'Whiskey': { en: 'Whiskey', es: 'Whisky', de: 'Whisky', ru: 'Виски' },
    'Brandy': { en: 'Brandy', es: 'Brandy', de: 'Brandy', ru: 'Бренди' },
  };
  
  return spiritTranslations[spirit]?.[language] || spirit;
}
