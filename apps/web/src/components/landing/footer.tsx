'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/theme-context';

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <Image
              src={theme === 'dark' ? '/assets/logo/VAXEN white.png' : '/assets/logo/VAXEN Navy.png'}
              alt="Vaxen Global"
              width={100}
              height={30}
              className="object-contain"
              unoptimized
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link href="#product" className="hover:text-foreground transition-colors">
              Product
            </Link>
            <Link href="#who-its-for" className="hover:text-foreground transition-colors">
              Who It's For
            </Link>
            <Link href="#how-it-works" className="hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="#security" className="hover:text-foreground transition-colors">
              Security
            </Link>
            <Link href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vaxen Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

