'use client';

import type { Cocktail } from '@/lib/cocktails';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useAppContext } from '@/hooks/use-app-context';
import { useTranslation } from '@/hooks/use-translation';

interface DailySuggestionProps {
  cocktail: Cocktail;
}

export default function DailySuggestion({ cocktail }: DailySuggestionProps) {
  const { language } = useAppContext();
  const { t } = useTranslation();

  return (
    <section aria-labelledby="daily-suggestion-title">
      <Card className="border-2 border-accent shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-6 flex flex-col justify-center">
            <h2 id="daily-suggestion-title" className="text-lg font-semibold text-accent font-body tracking-wider uppercase">
              {t('daily.title')}
            </h2>
            <p className="text-4xl lg:text-5xl font-bold font-headline text-primary mt-2">
              {cocktail.name[language]}
            </p>
            <p className="mt-4 text-muted-foreground font-body">
              {t('daily.description')}
            </p>
          </div>
          <div className="relative h-64 md:h-full min-h-[250px]">
            <Image
              src={cocktail.image}
              alt={cocktail.name[language]}
              fill
              className="object-cover"
              data-ai-hint={`${cocktail.baseSpirit} cocktail`}
              priority
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
