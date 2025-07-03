import Header from '@/components/header';
import DailySuggestion from '@/components/daily-suggestion';
import CocktailList from '@/components/cocktail-list';
import { getCocktails, getDailyCocktail } from '@/lib/cocktails';

export default function Home() {
  const cocktails = getCocktails();
  const dailyCocktail = getDailyCocktail();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <DailySuggestion cocktail={dailyCocktail} />
        <div className="mt-12">
          <CocktailList allCocktails={cocktails} />
        </div>
      </main>
      <footer className="w-full py-6 text-center">
        <p className="text-sm text-muted-foreground font-body">
          &copy; {new Date().getFullYear()} Cocktail Compass. Cheers!
        </p>
      </footer>
    </div>
  );
}
