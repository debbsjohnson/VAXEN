import { Inter } from 'next/font/google';
import '../globals.css';
import { Providers } from '@/components/providers';
import { NextIntlClientProvider } from 'next-intl';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/assets/logo/Favicon 1.jpg', sizes: 'any', type: 'image/jpeg' },
      { url: '/assets/logo/VAXEN.png', sizes: 'any' },
    ],
    apple: [
      { url: '/assets/logo/Favicon 1.jpg', sizes: '180x180' },
    ],
    shortcut: '/assets/logo/Favicon 1.jpg',
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  
  // Load messages directly to avoid next-intl context issues
  const validLocale = ['en', 'pt-BR', 'es-ES'].includes(locale) ? locale : 'en';
  const messages = (await import(`../../messages/${validLocale}.json`)).default;

  return (
    <html lang={locale} className="dark">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}