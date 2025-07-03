
'use client';

import { useState, useMemo } from 'react';
import type { Cocktail } from '@/lib/cocktails';
import { baseSpirits } from '@/lib/cocktails';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CocktailCard from './cocktail-card';
import { Search } from 'lucide-react';
import { useAppContext } from '@/hooks/use-app-context';

interface CocktailListProps {
  allCocktails: Cocktail[];
}

export default function CocktailList({ allCocktails }: CocktailListProps) {
  const { language } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpirit, setSelectedSpirit] = useState<string | null>(null);

  const filteredCocktails = useMemo(() => {
    return allCocktails.filter(cocktail => {
      const matchesSearch = cocktail.name[language]
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesSpirit = !selectedSpirit || cocktail.baseSpirit === selectedSpirit;
      return matchesSearch && matchesSpirit;
    });
  }, [allCocktails, searchQuery, selectedSpirit, language]);

  const text = {
    title: { en: 'Cocktail Library', es: 'Recetario de Cócteles' },
    searchPlaceholder: { en: 'Search for a cocktail...', es: 'Buscar un cóctel...' },
    all: { en: 'All', es: 'Todos' },
  }

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
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <Button
            variant={!selectedSpirit ? 'default' : 'outline'}
            onClick={() => setSelectedSpirit(null)}
            className="rounded-full"
          >
            {text.all[language]}
          </Button>
        {baseSpirits.map(spirit => (
          <Button
            key={spirit}
            variant={selectedSpirit === spirit ? 'default' : 'outline'}
            onClick={() => setSelectedSpirit(spirit)}
            className="rounded-full"
          >
            {spirit}
          </Button>
        ))}
      </div>

      {filteredCocktails.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCocktails.map(cocktail => (
            <CocktailCard key={cocktail.id} cocktail={cocktail} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-16">
          {language === 'en' ? 'No cocktails found. Try a different search!' : 'No se encontraron cócteles. ¡Intenta una búsqueda diferente!'}
        </p>
      )}
    </section>
  );
}
