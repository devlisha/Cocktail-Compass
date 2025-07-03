
'use client';

import { useState, useEffect, useCallback } from 'react';
import type { CocktailSummary } from '@/lib/cocktails';
import { baseSpirits, getCocktails, getCocktailsBySpirit, searchCocktails } from '@/lib/cocktails';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CocktailCard from './cocktail-card';
import { Search } from 'lucide-react';
import { useAppContext } from '@/hooks/use-app-context';
import { Skeleton } from '@/components/ui/skeleton';

function CocktailGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-[300px] w-full" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-8 w-1/4" />
        </div>
      ))}
    </div>
  );
}

export default function CocktailList() {
  const { language } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const [selectedSpirit, setSelectedSpirit] = useState<string | null>(null);
  const [cocktails, setCocktails] = useState<CocktailSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    const fetchCocktails = async () => {
      setLoading(true);
      let results: CocktailSummary[] = [];
      if (selectedSpirit) {
        results = await getCocktailsBySpirit(selectedSpirit);
      } else if (debouncedSearchQuery) {
        results = await searchCocktails(debouncedSearchQuery);
      } else {
        results = await getCocktails();
      }
      setCocktails(results);
      setLoading(false);
    };

    fetchCocktails();
  }, [debouncedSearchQuery, selectedSpirit]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (selectedSpirit) setSelectedSpirit(null);
  };

  const handleSpiritSelect = (spirit: string | null) => {
    setSelectedSpirit(spirit);
    if (searchQuery) setSearchQuery('');
  };

  const text = {
    title: { en: 'Cocktail Library', es: 'Recetario de Cócteles' },
    searchPlaceholder: { en: 'Search for a cocktail...', es: 'Buscar un cóctel...' },
    all: { en: 'All', es: 'Todos' },
  };

  return (
    <section aria-labelledby="cocktail-library-title">
      <div className="text-center mb-8">
        <h2 id="cocktail-library-title" className="text-3xl md:text-4xl font-bold font-headline text-primary">
          {text.title[language]}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder={text.searchPlaceholder[language]}
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 w-full"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-8">
        <Button
          variant={!selectedSpirit ? 'default' : 'outline'}
          onClick={() => handleSpiritSelect(null)}
          className="rounded-full"
        >
          {text.all[language]}
        </Button>
        {baseSpirits.map((spirit) => (
          <Button
            key={spirit}
            variant={selectedSpirit === spirit ? 'default' : 'outline'}
            onClick={() => handleSpiritSelect(spirit)}
            className="rounded-full"
          >
            {spirit}
          </Button>
        ))}
      </div>

      {loading ? (
        <CocktailGridSkeleton />
      ) : cocktails.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cocktails.map((cocktail) => (
            <CocktailCard key={cocktail.id} cocktail={cocktail} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-16">
          {language === 'en'
            ? 'No cocktails found. Try a different search!'
            : 'No se encontraron cócteles. ¡Intenta una búsqueda diferente!'}
        </p>
      )}
    </section>
  );
}
