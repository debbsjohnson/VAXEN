import { LandingPage } from '@/components/landing/landing-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vaxen Global | Global Treasury for Cross-Border Property Acquisitions',
  description: 'Global treasury for property companies deploying capital across Europe, South America, and Africa. Manage FX timing, multi-currency balances, and cross-border settlement.',
  openGraph: {
    title: 'Vaxen Global | Global Treasury for Cross-Border Property Acquisitions',
    description: 'Global treasury for property companies deploying capital across Europe, South America, and Africa. Manage FX timing, multi-currency balances, and cross-border settlement.',
    type: 'website',
    images: [
      {
        url: '/assets/logo/VAXEN.png',
        width: 1200,
        height: 630,
        alt: 'Vaxen Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaxen Global | Global Treasury for Cross-Border Property Acquisitions',
    description: 'Global treasury for property companies deploying capital across Europe, South America, and Africa.',
  },
};

export default function Landing() {
  return <LandingPage />;
}

