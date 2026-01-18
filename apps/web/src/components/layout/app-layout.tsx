'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LayoutDashboard, 
  Wallet, 
  ArrowLeftRight, 
  Send, 
  Users, 
  BarChart3, 
  Settings, 
  Shield,
  HelpCircle,
  Bell,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';

const navigation = [
  { name: 'Dashboard', href: '/en/dashboard', icon: LayoutDashboard },
  { name: 'Wallets', href: '/en/wallets', icon: Wallet },
  { name: 'Convert', href: '/en/convert', icon: ArrowLeftRight },
  { name: 'Payouts', href: '/en/payouts', icon: Send },
  { name: 'Team', href: '/en/team', icon: Users },
  { name: 'Reports', href: '/en/reports', icon: BarChart3 },
  { name: 'Settings', href: '/en/settings', icon: Settings },
  { name: 'Admin', href: '/en/admin', icon: Shield },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface AppLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export function AppLayout({ children, currentPage }: AppLayoutProps) {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  
  console.log('AppLayout theme:', theme);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="flex flex-col w-64 gradient-accent border-r border-slate-700 pattern-overlay-blur pattern-bg-4">
        <div className="flex items-center h-16 px-6 border-b border-slate-700">
          <Link href="/en/dashboard" className="flex items-center">
            <Image
              src={theme === 'dark' ? '/assets/logo/VAXEN white.png' : '/assets/logo/VAXEN Navy.png'}
              alt="Vaxen Finance"
              width={120}
              height={35}
              className="object-contain transform hover:scale-105 transition-all duration-300"
              priority
              unoptimized
            />
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                router.push(item.href);
              }}
                  className={classNames(
                    'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                    currentPage === item.name
                      ? 'gradient-primary text-white border-none outline-none'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </a>
          ))}
        </nav>
        
        {/* Bottom section with help and notifications */}
        <div className="px-4 py-4 border-t border-slate-700 space-y-2">
            <a
              href="/en/help"
              onClick={(e) => {
                e.preventDefault();
                router.push('/en/help');
              }}
              className="flex items-center px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
            >
              <HelpCircle className="mr-3 h-5 w-5" />
              Need Help?
            </a>
          <a
            href="/en/notifications"
            onClick={(e) => {
              e.preventDefault();
              router.push('/en/notifications');
            }}
            className="flex items-center px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
          >
            <Bell className="mr-3 h-5 w-5" />
            Notifications
            <span className="ml-auto gradient-primary text-white text-xs px-2 py-1 rounded-full">3</span>
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center justify-between h-16 px-6 border-b border-slate-700 gradient-accent">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold text-white">
              Global Treasury Dashboard
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link 
              href="/en/settings"
              className="flex items-center space-x-3 hover:bg-slate-700/50 rounded-lg px-2 py-1 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-white">JD</span>
              </div>
              <span className="text-sm text-white">John Doe</span>
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
