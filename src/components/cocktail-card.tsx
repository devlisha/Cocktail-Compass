'use client';

import { useState, useEffect } from 'react';
import type { Cocktail, CocktailSummary } from '@/lib/cocktails';
import { getCocktailById } from '@/lib/cocktails';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useAppContext } from '@/hooks/use-app-context';
import { useTranslation } from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

function CocktailDetails({ cocktailId, initialName }: { cocktailId: string; initialName: string }) {
  const { language } = useAppContext();
  const { t } = useTranslation();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!cocktailId) return;
    const fetchDetails = async () => {
      setLoading(true);
      const details = await getCocktailById(cocktailId);
      setCocktail(details);
      setLoading(false);
    };
    fetchDetails();
  }, [cocktailId]);

  const title = cocktail ? cocktail.name[language] : initialName;

  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-headline text-3xl text-primary">{title}</DialogTitle>
      </DialogHeader>
      
      {loading ? (
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <Skeleton className="aspect-square w-full rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-6 w-1/4 mt-4" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      ) : !cocktail ? (
        <div className="mt-4">{t('cocktail.notFound')}</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 mt-4 max-h-[70vh] overflow-y-auto pr-4">
          <div className="relative aspect-square md:aspect-auto rounded-lg overflow-hidden">
            <Image
              src={cocktail.image}
              alt={cocktail.name[language]}
              fill
              className="object-cover"
              data-ai-hint={`${cocktail.baseSpirit} cocktail`}
            />
          </div>
          <div>
            <h3 className="font-bold font-headline text-xl mb-2">{t('cocktail.ingredients')}</h3>
            <ul className="space-y-1 list-disc list-inside font-body text-muted-foreground mb-6">
              {cocktail.ingredients.map((ing, index) => (
                <li key={index}>
                  <span className="font-semibold text-foreground">{ing.name[language]}</span>: {ing.amount}
                </li>
              ))}
            </ul>

            <h3 className="font-bold font-headline text-xl mb-2">{t('cocktail.instructions')}</h3>
            <p className="font-body text-muted-foreground whitespace-pre-line">{cocktail.instructions[language]}</p>
          </div>
        </div>
      )}
    </>
  );
}


export default function CocktailCard({ cocktail }: { cocktail: CocktailSummary }) {
  const { language, isFavorite, toggleFavorite } = useAppContext();
  const { t } = useTranslation();
  const favorite = isFavorite(cocktail.id);

  return (
    <Dialog>
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <DialogTrigger asChild>
          <div className="relative cursor-pointer">
            <div className="aspect-[3/4] relative">
              <Image
                src={cocktail.image}
                alt={cocktail.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                data-ai-hint={`${cocktail.baseSpirit} cocktail`}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <CardHeader className="absolute bottom-0 w-full">
              <CardTitle className="font-headline text-2xl text-white">
                {cocktail.name}
              </CardTitle>
            </CardHeader>
          </div>
        </DialogTrigger>
        <CardFooter className="p-4 mt-auto bg-card">
          <div className="flex items-center justify-between w-full">
            <Badge variant="outline">{cocktail.baseSpirit}</Badge>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full transition-transform hover:scale-110 active:scale-95"
              aria-label={favorite ? t('cocktail.removeFromFavorites') : t('cocktail.addToFavorites')}
              onClick={() => toggleFavorite(cocktail.id)}
            >
              <Heart className={cn('h-6 w-6', favorite ? 'text-red-500 fill-current' : 'text-muted-foreground')} />
            </Button>
          </div>
        </CardFooter>
      </Card>
      <DialogContent className="sm:max-w-3xl">
        <CocktailDetails cocktailId={cocktail.id} initialName={cocktail.name} />
      </DialogContent>
    </Dialog>
  );
}
