export type Language = 'en' | 'es';

type TranslatedString = {
  [key in Language]: string;
};

export type Ingredient = {
  name: TranslatedString;
  amount: string;
};

export type Cocktail = {
  id: string;
  name: TranslatedString;
  ingredients: Ingredient[];
  instructions: TranslatedString;
  image: string;
  tags: TranslatedString[];
  baseSpirit: string;
};

const cocktails: Cocktail[] = [
  {
    id: 'mojito',
    name: { en: 'Mojito', es: 'Mojito' },
    ingredients: [
      { name: { en: 'White Rum', es: 'Ron Blanco' }, amount: '2 oz' },
      { name: { en: 'Lime Juice', es: 'Jugo de Lima' }, amount: '1 oz' },
      { name: { en: 'Mint Leaves', es: 'Hojas de Menta' }, amount: '6-8' },
      { name: { en: 'Simple Syrup', es: 'Jarabe Simple' }, amount: '0.75 oz' },
      { name: { en: 'Club Soda', es: 'Soda' }, amount: 'Top with' },
    ],
    instructions: {
      en: 'Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish with a mint sprig and a lime slice.',
      es: 'Machacar las hojas de menta con el azúcar y el jugo de lima. Añadir un chorrito de soda y llenar el vaso con hielo picado. Verter el ron y completar con soda. Decorar con una ramita de menta y una rodaja de lima.',
    },
    image: 'https://placehold.co/600x800.png',
    tags: [{ en: 'Classic', es: 'Clásico' }, { en: 'Refreshing', es: 'Refrescante' }],
    baseSpirit: 'Rum',
  },
  {
    id: 'old-fashioned',
    name: { en: 'Old Fashioned', es: 'Old Fashioned' },
    ingredients: [
      { name: { en: 'Bourbon or Rye Whiskey', es: 'Bourbon o Whiskey de Centeno' }, amount: '2 oz' },
      { name: { en: 'Angostura Bitters', es: 'Amargo de Angostura' }, amount: '2 dashes' },
      { name: { en: 'Sugar Cube', es: 'Cubo de Azúcar' }, amount: '1' },
      { name: { en: 'Orange Peel', es: 'Piel de Naranja' }, amount: 'Garnish' },
    ],
    instructions: {
      en: 'Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Garnish with an orange peel.',
      es: 'Colocar el cubo de azúcar en un vaso old fashioned y saturar con amargo de angostura, añadir un chorrito de agua. Machacar hasta disolver. Llenar el vaso con cubos de hielo y añadir el whiskey. Decorar con una piel de naranja.',
    },
    image: 'https://placehold.co/600x800.png',
    tags: [{ en: 'Classic', es: 'Clásico' }, { en: 'Strong', es: 'Fuerte' }],
    baseSpirit: 'Whiskey',
  },
  {
    id: 'margarita',
    name: { en: 'Margarita', es: 'Margarita' },
    ingredients: [
      { name: { en: 'Tequila', es: 'Tequila' }, amount: '2 oz' },
      { name: { en: 'Lime Juice', es: 'Jugo de Lima' }, amount: '1 oz' },
      { name: { en: 'Cointreau', es: 'Cointreau' }, amount: '1 oz' },
      { name: { en: 'Salt', es: 'Sal' }, amount: 'For rim' },
    ],
    instructions: {
      en: 'Rub the rim of the glass with a lime slice to make the salt stick to it. Shake the other ingredients with ice, then carefully pour into the glass. Garnish with a lime wheel.',
      es: 'Frotar el borde del vaso con una rodaja de lima para que la sal se adhiera. Agitar los otros ingredientes con hielo, luego verter con cuidado en el vaso. Decorar con una rodaja de lima.',
    },
    image: 'https://placehold.co/600x800.png',
    tags: [{ en: 'Classic', es: 'Clásico' }, { en: 'Party', es: 'Fiesta' }],
    baseSpirit: 'Tequila',
  },
  {
    id: 'negroni',
    name: { en: 'Negroni', es: 'Negroni' },
    ingredients: [
      { name: { en: 'Gin', es: 'Ginebra' }, amount: '1 oz' },
      { name: { en: 'Campari', es: 'Campari' }, amount: '1 oz' },
      { name: { en: 'Sweet Vermouth', es: 'Vermut Dulce' }, amount: '1 oz' },
    ],
    instructions: {
      en: 'Stir all ingredients with ice, then strain into a rocks glass with a large ice cube. Garnish with an orange peel.',
      es: 'Remover todos los ingredientes con hielo, luego colar en un vaso de rocas con un cubo de hielo grande. Decorar con una piel de naranja.',
    },
    image: 'https://placehold.co/600x800.png',
    tags: [{ en: 'Classic', es: 'Clásico' }, { en: 'Bitter', es: 'Amargo' }],
    baseSpirit: 'Gin',
  },
  {
    id: 'martini',
    name: { en: 'Dry Martini', es: 'Martini Seco' },
    ingredients: [
      { name: { en: 'Gin', es: 'Ginebra' }, amount: '2.5 oz' },
      { name: { en: 'Dry Vermouth', es: 'Vermut Seco' }, amount: '0.5 oz' },
      { name: { en: 'Lemon Peel or Olives', es: 'Piel de Limón o Aceitunas' }, amount: 'Garnish' },
    ],
    instructions: {
      en: 'Stir gin and vermouth with ice. Strain into a chilled cocktail glass. Garnish with a lemon peel or olives.',
      es: 'Remover la ginebra y el vermut con hielo. Colar en una copa de cóctel fría. Decorar con una piel de limón o aceitunas.',
    },
    image: 'https://placehold.co/600x800.png',
    tags: [{ en: 'Classic', es: 'Clásico' }, { en: 'Elegant', es: 'Elegante' }],
    baseSpirit: 'Gin',
  },
  {
    id: 'whiskey-sour',
    name: { en: 'Whiskey Sour', es: 'Whiskey Sour' },
    ingredients: [
      { name: { en: 'Whiskey', es: 'Whiskey' }, amount: '2 oz' },
      { name: { en: 'Lemon Juice', es: 'Jugo de Limón' }, amount: '1 oz' },
      { name: { en: 'Simple Syrup', es: 'Jarabe Simple' }, amount: '0.75 oz' },
      { name: { en: 'Egg White (optional)', es: 'Clara de Huevo (opcional)' }, amount: '1' },
    ],
    instructions: {
      en: 'Add all ingredients to a shaker and dry-shake (without ice) for 30 seconds. Add ice and shake again until well-chilled. Strain into a chilled glass. Garnish with a cherry and/or orange slice.',
      es: 'Añadir todos los ingredientes a una coctelera y agitar en seco (sin hielo) durante 30 segundos. Añadir hielo y agitar de nuevo hasta que esté bien frío. Colar en un vaso frío. Decorar con una cereza y/o una rodaja de naranja.',
    },
    image: 'https://placehold.co/600x800.png',
    tags: [{ en: 'Classic', es: 'Clásico' }, { en: 'Sour', es: 'Agrio' }],
    baseSpirit: 'Whiskey',
  },
  {
    id: 'cosmopolitan',
    name: { en: 'Cosmopolitan', es: 'Cosmopolitan' },
    ingredients: [
      { name: { en: 'Vodka Citron', es: 'Vodka de Limón' }, amount: '1.5 oz' },
      { name: { en: 'Cointreau', es: 'Cointreau' }, amount: '1 oz' },
      { name: { en: 'Lime Juice', es: 'Jugo de Lima' }, amount: '0.5 oz' },
      { name: { en: 'Cranberry Juice', es: 'Jugo de Arándano' }, amount: '0.25 oz' },
    ],
    instructions: {
      en: 'Add all ingredients into a shaker with ice and shake. Strain into a large cocktail glass. Garnish with a lime wheel.',
      es: 'Añadir todos los ingredientes a una coctelera con hielo y agitar. Colar en una copa de cóctel grande. Decorar con una rodaja de lima.',
    },
    image: 'https://placehold.co/600x800.png',
    tags: [{ en: 'Fruity', es: 'Afrutado' }, { en: 'Modern Classic', es: 'Clásico Moderno' }],
    baseSpirit: 'Vodka',
  },
  {
    id: 'aperol-spritz',
    name: { en: 'Aperol Spritz', es: 'Aperol Spritz' },
    ingredients: [
      { name: { en: 'Aperol', es: 'Aperol' }, amount: '3 parts' },
      { name: { en: 'Prosecco', es: 'Prosecco' }, amount: '3 parts' },
      { name: { en: 'Club Soda', es: 'Soda' }, amount: '1 part' },
      { name: { en: 'Orange Slice', es: 'Rodaja de Naranja' }, amount: 'Garnish' },
    ],
    instructions: {
      en: 'Build in a wine glass filled with ice. Combine Prosecco followed by Aperol. Add a splash of soda, stir gently. Garnish with an orange slice.',
      es: 'Construir en una copa de vino llena de hielo. Combinar el Prosecco seguido del Aperol. Añadir un chorrito de soda, remover suavemente. Decorar con una rodaja de naranja.',
    },
    image: 'https://placehold.co/600x800.png',
    tags: [{ en: 'Bubbly', es: 'Burbujeante' }, { en: 'Aperitif', es: 'Aperitivo' }],
    baseSpirit: 'Aperol',
  },
  {
    id: 'gin-and-tonic',
    name: { en: 'Gin and Tonic', es: 'Gin Tonic' },
    ingredients: [
      { name: { en: 'Gin', es: 'Ginebra' }, amount: '2 oz' },
      { name: { en: 'Tonic Water', es: 'Agua Tónica' }, amount: '4-5 oz' },
      { name: { en: 'Lime Wedge', es: 'Cuña de Lima' }, amount: 'Garnish' },
    ],
    instructions: {
      en: 'Fill a highball glass with ice. Pour in the gin, then top with tonic water. Squeeze in the lime wedge and drop it into the glass.',
      es: 'Llenar un vaso highball con hielo. Verter la ginebra, luego completar con agua tónica. Exprimir la cuña de lima y dejarla caer en el vaso.',
    },
    image: 'https://placehold.co/600x800.png',
    tags: [{ en: 'Simple', es: 'Sencillo' }, { en: 'Refreshing', es: 'Refrescante' }],
    baseSpirit: 'Gin',
  },
  {
    id: 'pisco-sour',
    name: { en: 'Pisco Sour', es: 'Pisco Sour' },
    ingredients: [
      { name: { en: 'Pisco', es: 'Pisco' }, amount: '2 oz' },
      { name: { en: 'Lime Juice', es: 'Jugo de Lima' }, amount: '1 oz' },
      { name: { en: 'Simple Syrup', es: 'Jarabe Simple' }, amount: '0.75 oz' },
      { name: { en: 'Egg White', es: 'Clara de Huevo' }, amount: '1' },
      { name: { en: 'Angostura Bitters', es: 'Amargo de Angostura' }, amount: '1 dash' },
    ],
    instructions: {
      en: 'Vigorously shake all ingredients (except bitters) with ice. Strain into a chilled glass. Garnish with a few drops of Angostura bitters.',
      es: 'Agitar vigorosamente todos los ingredientes (excepto el amargo) con hielo. Colar en un vaso frío. Decorar con unas gotas de amargo de Angostura.',
    },
    image: 'https://placehold.co/600x800.png',
    tags: [{ en: 'Sour', es: 'Agrio' }, { en: 'Foamy', es: 'Espumoso' }],
    baseSpirit: 'Pisco',
  },
];

export function getCocktails() {
  return cocktails;
}

export function getCocktailById(id: string) {
  return cocktails.find((c) => c.id === id);
}

export function getDailyCocktail(): Cocktail {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
  const index = dayOfYear % cocktails.length;
  return cocktails[index];
}

export const baseSpirits = [...new Set(cocktails.map(c => c.baseSpirit))];
