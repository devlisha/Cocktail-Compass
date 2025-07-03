
'use client';

import { useContext } from 'react';
import { AppContext } from '@/contexts/app-context';

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
