
import type { Cocktail } from '@/lib/cocktails';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface DailySuggestionProps {
  cocktail: Cocktail;
}

export default function DailySuggestion({ cocktail }: DailySuggestionProps) {
  // Since this is a server component, we can decide language based on request headers later.
  // For now, we default to English. A client component wrapper could handle language switching.
  const language = 'en';
  const text = {
    title: { en: 'Cocktail of the Day', es: 'Cóctel del Día' },
  }

  return (
    <section aria-labelledby="daily-suggestion-title">
      <Card className="border-2 border-accent shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-6 flex flex-col justify-center">
            <h2 id="daily-suggestion-title" className="text-lg font-semibold text-accent font-body tracking-wider uppercase">
              {text.title[language]}
            </h2>
            <p className="text-4xl lg:text-5xl font-bold font-headline text-primary mt-2">
              {cocktail.name[language]}
            </p>
            <p className="mt-4 text-muted-foreground font-body">
              {language === 'en' ? 'A delightful suggestion to brighten your day. Find the recipe below or explore other classics.' : 'Una sugerencia deliciosa para alegrar tu día. Encuentra la receta abajo o explora otros clásicos.'}
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
