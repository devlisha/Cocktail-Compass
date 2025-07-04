'use client';

import { useAppContext } from '@/hooks/use-app-context';
import { useEffect } from 'react';

export default function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useAppContext();

  useEffect(() => {
    // Update the document language attribute when language changes
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
}
