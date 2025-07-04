# Cocktail Compass 🍸

Cocktail Compass is a modern, multilingual web application designed to be your ultimate guide to the world of cocktails. Built with cutting-edge web technologies, it allows users to discover, search, and save their favorite cocktail recipes with an intuitive and beautiful interface.

## ✨ Features

### 🍹 Core Functionality
- **Dynamic Cocktail Library:** Browse an extensive collection of cocktails powered by TheCocktailDB API
- **Daily Suggestion:** Discover a new "Cocktail of the Day" every time you visit
- **Advanced Search:** Real-time search with intelligent filtering by name
- **Spirit Filtering:** Filter cocktails by base spirits (Vodka, Gin, Rum, Tequila, Whiskey, Brandy)
- **Favorites System:** Save and manage your favorite cocktails with persistent storage

### 🌍 Internationalization
- **4 Languages Supported:** English 🇺🇸, Spanish 🇪🇸, German 🇩🇪, Russian 🇷🇺
- **Smart Language Detection:** Automatically detects browser language preferences
- **Comprehensive Translations:** 
  - Complete UI translation system
  - 100+ cocktail ingredients translated
  - Localized base spirit names
  - Context-aware text rendering
- **Persistent Language Settings:** Your language preference is saved locally

### 🎨 User Experience
- **Responsive Design:** Fully optimized for all devices (mobile, tablet, desktop)
- **Modern UI:** Clean, elegant interface with smooth animations
- **Dark/Light Theme Support:** Seamless theme switching
- **Accessibility:** WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router and Turbopack
- **Language:** [TypeScript](https://www.typescriptlang.org/) for type safety
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/) with Radix UI primitives
- **State Management:** React Context API with custom hooks
- **Internationalization:** Custom i18n system with type-safe translations
- **AI Integration:** [Genkit (Google AI)](https://firebase.google.com/docs/genkit) for enhanced features
- **Data Source:** [TheCocktailDB API](https://www.thecocktaildb.com/api.php)
- **Fonts:** Google Fonts (Playfair Display + PT Sans)

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 20 or later)
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd cocktail-compass
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:9002](http://localhost:9002) to see the application

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
npm run genkit:dev   # Start Genkit AI development server
npm run genkit:watch # Start Genkit with file watching
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # ShadCN UI components
│   ├── header.tsx        # Navigation header
│   ├── daily-suggestion.tsx  # Daily cocktail feature
│   ├── cocktail-list.tsx     # Cocktail library
│   ├── cocktail-card.tsx     # Individual cocktail cards
│   └── language-wrapper.tsx  # i18n HTML wrapper
├── lib/                   # Utilities and business logic
│   ├── cocktails.ts      # API integration and data models
│   ├── i18n.ts           # Internationalization system
│   ├── ingredient-translations.ts  # Ingredient translations
│   └── utils.ts          # General utilities
├── hooks/                 # Custom React hooks
│   ├── use-app-context.ts    # Global state hook
│   ├── use-translation.ts    # Translation hook
│   ├── use-mobile.tsx       # Mobile detection
│   └── use-toast.ts         # Toast notifications
├── contexts/              # React Context providers
│   └── app-context.tsx   # Global application state
└── ai/                   # Genkit AI configuration
    ├── genkit.ts         # AI setup and flows
    └── dev.ts            # Development entry point
```

## 🌐 Internationalization System

The application features a robust internationalization system:

### Supported Languages
- **English (en)** 🇺🇸 - Default language
- **Spanish (es)** 🇪🇸 - Español
- **German (de)** 🇩🇪 - Deutsch  
- **Russian (ru)** 🇷🇺 - Русский

### Features
- **Automatic Detection:** Detects browser language on first visit
- **Persistent Settings:** Language preference saved in localStorage
- **Typed Translations:** Type-safe translation keys prevent errors
- **Ingredient Localization:** 100+ common cocktail ingredients translated
- **Fallback System:** Graceful fallback to English for missing translations

### Usage in Components
```typescript
import { useTranslation } from '@/hooks/use-translation';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('header.title')}</h1>
      <p>{t('daily.description')}</p>
    </div>
  );
}
```

## 🎯 Key Features in Detail

### Cocktail Discovery
- Browse curated cocktail collections
- Filter by base spirit type
- Real-time search with debouncing
- Detailed ingredient lists with amounts
- Step-by-step preparation instructions

### Personalization
- Favorite cocktails system with visual indicators
- Persistent favorites storage
- Quick access to saved cocktails
- Language preferences

### Mobile-First Design
- Touch-friendly interface
- Optimized images and loading
- Responsive grid layouts
- Smooth animations and transitions

## 🚀 Deployment

This project is optimized for **Vercel** deployment with zero configuration.

### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cocktail-compass)

### Manual Deploy
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Build for Production
```bash
npm run build
```

### Performance Features
- ⚡ **Edge Runtime:** Optimized for Vercel Edge Functions
- 🖼️ **Image Optimization:** Automatic WebP/AVIF conversion
- 📦 **Bundle Optimization:** Tree shaking and code splitting
- 🚀 **CDN:** Global edge network delivery
- 💾 **Caching:** Smart caching strategies
- 🔒 **Security Headers:** Built-in security optimizations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [TheCocktailDB](https://www.thecocktaildb.com/) for the comprehensive cocktail database
- [ShadCN](https://ui.shadcn.com/) for the beautiful UI components
- [Vercel](https://vercel.com/) for Next.js and development tools
- [Google Fonts](https://fonts.google.com/) for typography
