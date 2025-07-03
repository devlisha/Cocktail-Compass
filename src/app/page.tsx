import Header from '@/components/header';
import DailySuggestion from '@/components/daily-suggestion';
import CocktailList from '@/components/cocktail-list';
import { getDailyCocktail } from '@/lib/cocktails';
import { Skeleton } from '@/components/ui/skeleton';

export default async function Home() {
  const dailyCocktail = await getDailyCocktail();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        {dailyCocktail ? (
          <DailySuggestion cocktail={dailyCocktail} />
        ) : (
          <div className="space-y-4">
            <Skeleton className="h-10 w-1/4" />
            <Skeleton className="h-64 w-full" />
          </div>
        )}
        <div className="mt-12">
          <CocktailList />
        </div>
      </main>
      <footer className="w-full py-6 text-center">
        <p className="text-sm text-muted-foreground font-body">
          &copy; {new Date().getFullYear()} Cocktail Compass. Powered by TheCocktailDB.
        </p>
      </footer>
    </div>
  );
}
