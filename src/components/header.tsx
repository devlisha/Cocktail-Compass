
'use client';

import { Martini, Heart, Languages, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/hooks/use-app-context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { getCocktailById } from '@/lib/cocktails';
import Image from 'next/image';

function FavoritesSheetContent() {
    const { favorites, language } = useAppContext();
    const favoriteCocktails = favorites.map(id => getCocktailById(id)).filter(Boolean);

    return (
        <>
            <SheetHeader>
                <SheetTitle className="font-headline">
                    {language === 'en' ? 'Favorite Cocktails' : 'Cócteles Favoritos'}
                </SheetTitle>
            </SheetHeader>
            <div className="py-4">
                {favoriteCocktails.length > 0 ? (
                    <ul className="space-y-4">
                        {favoriteCocktails.map(cocktail => cocktail && (
                            <li key={cocktail.id} className="flex items-center gap-4">
                                <Image
                                    src={cocktail.image}
                                    alt={cocktail.name[language]}
                                    width={50}
                                    height={50}
                                    className="rounded-md"
                                    data-ai-hint={`${cocktail.baseSpirit} cocktail`}
                                />
                                <span className="font-body">{cocktail.name[language]}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-muted-foreground text-center font-body">
                        {language === 'en' ? 'No favorites yet.' : 'Aún no tienes favoritos.'}
                    </p>
                )}
            </div>
        </>
    );
}


export default function Header() {
  const { language, setLanguage, favorites } = useAppContext();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Martini className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold font-headline text-primary">
            Cocktail Compass
          </h1>
        </div>

        <nav className="flex items-center gap-2">
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Languages className="h-5 w-5" />
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup
                value={language}
                onValueChange={(value) => setLanguage(value as 'en' | 'es')}
              >
                <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="es">Español</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {favorites.length}
                  </span>
                )}
                <span className="sr-only">View favorites</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
                <FavoritesSheetContent />
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
