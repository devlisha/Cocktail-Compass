
'use client';

import type { Language } from '@/lib/i18n';
import { detectLanguage } from '@/lib/i18n';
import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface AppContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  favorites: string[];
  toggleFavorite: (cocktailId: string) => void;
  isFavorite: (cocktailId: string) => boolean;
}

export const AppContext = createContext<AppContextType | null>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedFavorites = localStorage.getItem('cocktailFavorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
      
      // Use the new detectLanguage function
      const detectedLanguage = detectLanguage();
      setLanguage(detectedLanguage);
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem('cocktailFavorites', JSON.stringify(favorites));
      } catch (error) {
        console.error("Could not access localStorage:", error);
      }
    }
  }, [favorites, isMounted]);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem('cocktailLanguage', language);
      } catch (error) {
        console.error("Could not access localStorage:", error);
      }
    }
  }, [language, isMounted]);

  const toggleFavorite = useCallback((cocktailId: string) => {
    setFavorites(prev =>
      prev.includes(cocktailId)
        ? prev.filter(id => id !== cocktailId)
        : [...prev, cocktailId]
    );
  }, []);

  const isFavorite = useCallback((cocktailId: string) => {
    return favorites.includes(cocktailId);
  }, [favorites]);

  const value = {
    language,
    setLanguage,
    favorites,
    toggleFavorite,
    isFavorite,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
