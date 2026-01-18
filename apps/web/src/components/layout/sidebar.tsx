'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Wallet, 
  ArrowLeftRight, 
  Send, 
  Users, 
  BarChart3, 
  Settings, 
  Shield 
} from 'lucide-react';
// Simple utility function to combine class names
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  { name: 'dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'wallets', href: '/wallets', icon: Wallet },
  { name: 'convert', href: '/convert', icon: ArrowLeftRight },
  { name: 'payouts', href: '/payouts', icon: Send },
  { name: 'batch', href: '/payouts/batch', icon: Send },
  { name: 'team', href: '/team', icon: Users },
  { name: 'reports', href: '/reports', icon: BarChart3 },
  { name: 'settings', href: '/settings', icon: Settings },
  { name: 'admin', href: '/admin', icon: Shield },
];

export function Sidebar() {
  const t = useTranslations('navigation');
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-card border-r border-border">
      <div className="flex items-center h-16 px-6 border-b border-border">
        <h1 className="text-xl font-bold text-foreground">Vaxen</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname.includes(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {t(item.name as any)}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
