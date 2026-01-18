'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp, Eye, Wallet, ArrowRightLeft, DollarSign } from 'lucide-react';
import { CurrencyIcon } from '@/components/shared/currency-icon';

const previewBalances = [
  { currency: 'USD', amount: '300,000.00', change: '+2.5%', changeType: 'positive' },
  { currency: 'EUR', amount: '191,250.00', change: '-1.2%', changeType: 'negative' },
  { currency: 'GBP', amount: '118,500.00', change: '+0.8%', changeType: 'positive' },
  { currency: 'BRL', amount: '375,000.00', change: '+1.5%', changeType: 'positive' },
];

const previewTransactions = [
  {
    id: '1',
    description: 'USD to EUR conversion',
    amount: '5,000.00 USD',
    date: 'Jan 15, 2024',
    status: 'completed',
  },
  {
    id: '2',
    description: 'Payment to supplier',
    amount: '2,500.00 EUR',
    date: 'Jan 15, 2024',
    status: 'processing',
  },
];

export function DashboardPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const [dashboardVisible, setDashboardVisible] = useState(false);
  const [volume, setVolume] = useState(1);
  const [businesses, setBusinesses] = useState(100);
  const [transactions, setTransactions] = useState(100);
  const sectionRef = useRef<HTMLElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const dashboardHasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
            
            // Animate volume from 1 to 30M
            const volumeDuration = 4000; // 4 seconds
            const volumeSteps = 100;
            const volumeIncrement = (30_000_000 - 1) / volumeSteps;
            let volumeStep = 0;
            const volumeInterval = setInterval(() => {
              volumeStep++;
              const newVolume = Math.min(1 + volumeStep * volumeIncrement, 30_000_000);
              setVolume(newVolume);
              if (volumeStep >= volumeSteps) {
                clearInterval(volumeInterval);
              }
            }, volumeDuration / volumeSteps);

            // Animate businesses from 100 to 1000
            const businessesDuration = 4000;
            const businessesSteps = 100;
            const businessesIncrement = (1000 - 100) / businessesSteps;
            let businessesStep = 0;
            const businessesInterval = setInterval(() => {
              businessesStep++;
              const newBusinesses = Math.min(100 + businessesStep * businessesIncrement, 1000);
              setBusinesses(newBusinesses);
              if (businessesStep >= businessesSteps) {
                clearInterval(businessesInterval);
              }
            }, businessesDuration / businessesSteps);

            // Animate transactions from 100 to 5000
            const transactionsDuration = 4000;
            const transactionsSteps = 100;
            const transactionsIncrement = (5000 - 100) / transactionsSteps;
            let transactionsStep = 0;
            const transactionsInterval = setInterval(() => {
              transactionsStep++;
              const newTransactions = Math.min(100 + transactionsStep * transactionsIncrement, 5000);
              setTransactions(newTransactions);
              if (transactionsStep >= transactionsSteps) {
                clearInterval(transactionsInterval);
              }
            }, transactionsDuration / transactionsSteps);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Separate observer for dashboard container
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !dashboardHasAnimated.current) {
            setDashboardVisible(true);
            dashboardHasAnimated.current = true;
          }
        });
      },
      { threshold: 0.2 }
    );

    if (dashboardRef.current) {
      observer.observe(dashboardRef.current);
    }

    return () => {
      if (dashboardRef.current) {
        observer.unobserve(dashboardRef.current);
      }
    };
  }, []);

  // Format numbers
  const formatVolume = (num: number) => {
    if (num >= 1_000_000) {
      return `$${(num / 1_000_000).toFixed(1)}M+`;
    }
    if (num >= 1_000) {
      return `$${(num / 1_000).toFixed(0)}K+`;
    }
    return `$${Math.floor(num).toLocaleString()}+`;
  };

  const formatBusinesses = (num: number) => {
    return `${Math.floor(num).toLocaleString()}+`;
  };

  const formatTransactions = (num: number) => {
    return `${Math.floor(num).toLocaleString()}+`;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5"
          style={{
            background: 'radial-gradient(circle, rgba(12, 37, 115, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div
            className={`
              p-8 rounded-xl border border-primary/20
              bg-gradient-to-br from-background/80 to-background/60
              backdrop-blur-sm
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              transition-all duration-1500 ease-out
            `}
            style={{
              transitionDelay: '500ms',
              boxShadow: '0 0 30px rgba(12, 37, 115, 0.2), inset 0 0 20px rgba(12, 37, 115, 0.05)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #0C2573 0%, #BA0827 100%)',
                }}
              >
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
              Total Volume
            </p>
            <p className="text-3xl font-bold text-foreground">{formatVolume(volume)}</p>
          </div>

          <div
            className={`
              p-8 rounded-xl border border-primary/20
              bg-gradient-to-br from-background/80 to-background/60
              backdrop-blur-sm
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              transition-all duration-1500 ease-out
            `}
            style={{
              transitionDelay: '1000ms',
              boxShadow: '0 0 30px rgba(12, 37, 115, 0.2), inset 0 0 20px rgba(12, 37, 115, 0.05)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #0C2573 0%, #BA0827 100%)',
                }}
              >
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
              Trusted By
            </p>
            <p className="text-3xl font-bold text-foreground">{formatBusinesses(businesses)}</p>
            <p className="text-sm text-muted-foreground mt-1">Businesses</p>
          </div>

          <div
            className={`
              p-8 rounded-xl border border-primary/20
              bg-gradient-to-br from-background/80 to-background/60
              backdrop-blur-sm
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              transition-all duration-1500 ease-out
            `}
            style={{
              transitionDelay: '1500ms',
              boxShadow: '0 0 30px rgba(12, 37, 115, 0.2), inset 0 0 20px rgba(12, 37, 115, 0.05)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #0C2573 0%, #BA0827 100%)',
                }}
              >
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
              Total Transactions
            </p>
            <p className="text-3xl font-bold text-foreground">{formatTransactions(transactions)}</p>
          </div>
        </div>

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            See it in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a glimpse of your unified treasury dashboard. Manage all your currencies, track balances, and execute transactions from one powerful interface.
          </p>
        </div>

        {/* Dashboard preview container */}
        <div 
          ref={dashboardRef}
          className={`
            relative mx-auto max-w-6xl
            border border-primary/20 rounded-2xl
            bg-gradient-to-br from-background/95 via-background/90 to-background/95
            backdrop-blur-xl
            overflow-hidden
            shadow-2xl
            ${dashboardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            transition-all duration-2000 ease-out
          `}
          style={{
            boxShadow: '0 0 60px rgba(12, 37, 115, 0.3), inset 0 0 40px rgba(12, 37, 115, 0.1)',
          }}
        >
          {/* Dashboard header bar */}
          <div 
            className="h-16 px-6 flex items-center justify-between border-b border-primary/20"
            style={{
              background: 'linear-gradient(135deg, rgba(12, 37, 115, 0.2) 0%, rgba(186, 8, 39, 0.2) 100%)',
            }}
          >
            <h3 className="text-lg font-semibold text-foreground">Global Treasury Dashboard</h3>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #0C2573 0%, #BA0827 100%)',
                }}
              >
                <span className="text-xs font-medium text-white">JD</span>
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-8 space-y-8">
            {/* Welcome section */}
            <div
              className={`
                transition-all duration-1500 ease-out
                ${dashboardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
              `}
              style={{
                transitionDelay: '500ms',
              }}
            >
              <h4 className="text-2xl font-bold text-foreground mb-2">Dashboard</h4>
              <p className="text-muted-foreground">
                Welcome back! Here's an overview of your treasury operations.
              </p>
            </div>

            {/* Total balance card */}
            <div 
              className={`
                p-8 rounded-xl relative overflow-hidden 
                transition-all duration-1500 hover:scale-[1.02] hover:shadow-2xl
                ${dashboardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{
                background: 'linear-gradient(135deg, #0C2573 0%, #190326 50%, #BA0827 100%)',
                boxShadow: '0 0 40px rgba(12, 37, 115, 0.5), inset 0 0 30px rgba(186, 8, 39, 0.2)',
                transitionDelay: '1000ms',
                animation: dashboardVisible ? 'floatCard 3s ease-in-out infinite' : 'none',
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white/80 mb-2">TOTAL BALANCE</p>
                  <div className="flex items-center gap-3">
                    <p className="text-4xl font-bold text-white">$750,000.00</p>
                    <Eye className="h-5 w-5 text-white/60" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors backdrop-blur-sm">
                    VIEW WALLET
                  </button>
                  <TrendingUp className="h-6 w-6 text-white/60" />
                </div>
              </div>
            </div>

            {/* Currency balance cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {previewBalances.map((balance, index) => (
                <div
                  key={balance.currency}
                  className={`
                    p-4 rounded-xl border border-primary/10
                    bg-gradient-to-br from-background/80 to-background/60
                    backdrop-blur-sm
                    transition-all duration-1500
                    hover:scale-105 hover:border-primary/30
                    cursor-pointer
                    ${dashboardVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
                  `}
                  style={{
                    transitionDelay: `${1500 + index * 200}ms`,
                    boxShadow: '0 0 20px rgba(12, 37, 115, 0.1), inset 0 0 20px rgba(12, 37, 115, 0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(12, 37, 115, 0.3), inset 0 0 20px rgba(12, 37, 115, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(12, 37, 115, 0.1), inset 0 0 20px rgba(12, 37, 115, 0.05)';
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <CurrencyIcon currency={balance.currency} className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
                    {balance.changeType === 'positive' ? (
                      <ArrowUpRight className="h-4 w-4 text-green-400 animate-pulse" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-400 animate-pulse" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{balance.currency}</p>
                  <p className="text-lg font-bold text-foreground mb-1">{balance.amount}</p>
                  <p className={`text-xs font-medium ${balance.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>
                    {balance.change}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick actions and transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Quick Actions */}
              <div 
                className={`
                  p-6 rounded-xl border border-primary/10 
                  bg-gradient-to-br from-background/80 to-background/60 
                  backdrop-blur-sm
                  transition-all duration-1500 ease-out
                  hover:scale-[1.02] hover:border-primary/30
                  ${dashboardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                `}
                style={{
                  transitionDelay: '2500ms',
                  boxShadow: '0 0 20px rgba(12, 37, 115, 0.1)',
                }}
              >
                <h5 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h5>
                <div className="space-y-3">
                  <button 
                    className="w-full p-4 rounded-lg flex items-center justify-between transition-all hover:scale-[1.05] hover:shadow-xl"
                    style={{
                      background: 'linear-gradient(135deg, #0C2573 0%, #BA0827 100%)',
                      boxShadow: '0 0 20px rgba(12, 37, 115, 0.4)',
                      animation: 'pulse 2s ease-in-out infinite',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <ArrowRightLeft className="h-5 w-5 text-white" />
                      <span className="text-white font-medium">Convert Currency</span>
                    </div>
                    <TrendingUp className="h-5 w-5 text-white/60" />
                  </button>
                  <button className="w-full p-4 rounded-lg border border-primary/20 bg-background/50 hover:bg-background/70 transition-colors flex items-center gap-3">
                    <Wallet className="h-5 w-5 text-foreground" />
                    <span className="text-foreground font-medium">Send Money</span>
                  </button>
                  <button className="w-full p-4 rounded-lg border border-primary/20 bg-background/50 hover:bg-background/70 transition-colors flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-foreground" />
                    <span className="text-foreground font-medium">View Reports</span>
                  </button>
                </div>
              </div>

              {/* Recent Transactions */}
              <div 
                className={`
                  p-6 rounded-xl border border-primary/10 
                  bg-gradient-to-br from-background/80 to-background/60 
                  backdrop-blur-sm
                  transition-all duration-1500 ease-out
                  hover:scale-[1.02] hover:border-primary/30
                  ${dashboardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                `}
                style={{
                  transitionDelay: '3000ms',
                  boxShadow: '0 0 20px rgba(12, 37, 115, 0.1)',
                }}
              >
                <h5 className="text-lg font-semibold text-foreground mb-4">Recent Transactions</h5>
                <div className="space-y-3">
                  {previewTransactions.map((transaction, index) => (
                    <div
                      key={transaction.id}
                      className={`
                        p-4 rounded-lg border border-primary/10 
                        bg-background/30 flex items-center justify-between
                        transition-all duration-1500 ease-out
                        hover:scale-[1.02] hover:border-primary/30 hover:bg-background/40
                        ${dashboardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                      `}
                      style={{
                        transitionDelay: `${3500 + index * 300}ms`,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{transaction.description}</p>
                          <p className="text-xs text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-foreground">{transaction.amount}</p>
                        <p className="text-xs text-green-400 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-400"></span>
                          {transaction.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action below preview */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to experience the future of treasury management?
          </p>
          <button 
            className="px-10 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 text-white"
            style={{
              background: 'linear-gradient(135deg, rgba(12, 37, 115, 0.25) 0%, rgba(186, 8, 39, 0.25) 100%)',
              backdropFilter: 'blur(30px) saturate(200%)',
              WebkitBackdropFilter: 'blur(30px) saturate(200%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(12, 37, 115, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
            }}
          >
            Request Access
          </button>
        </div>
      </div>
    </section>
  );
}

