import type { Metadata } from 'next';
import './globals.css';
import { AppContextProvider } from '@/contexts/app-context';
import { Toaster } from '@/components/ui/toaster';
import LanguageWrapper from '@/components/language-wrapper';

export const metadata: Metadata = {
  title: {
    default: 'Cocktail Compass',
    template: '%s | Cocktail Compass',
  },
  description: 'Your guide to the world of cocktails. Discover, search, and save your favorite cocktail recipes with our modern, multilingual web application.',
  keywords: [
    'cocktails',
    'recipes',
    'drinks',
    'bartending',
    'mixology',
    'spirits',
    'multilingual',
    'vodka',
    'gin',
    'rum',
    'tequila',
    'whiskey',
  ],
  authors: [{ name: 'Cocktail Compass Team' }],
  creator: 'Cocktail Compass',
  publisher: 'Cocktail Compass',
  metadataBase: new URL('https://cocktail-compass.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cocktail-compass.vercel.app',
    title: 'Cocktail Compass - Your Guide to the World of Cocktails',
    description: 'Discover, search, and save your favorite cocktail recipes with our modern, multilingual web application.',
    siteName: 'Cocktail Compass',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Cocktail Compass - Your Guide to the World of Cocktails',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cocktail Compass - Your Guide to the World of Cocktails',
    description: 'Discover, search, and save your favorite cocktail recipes with our modern, multilingual web application.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AppContextProvider>
          <LanguageWrapper>
            {children}
            <Toaster />
          </LanguageWrapper>
        </AppContextProvider>
      </body>
    </html>
  );
}
