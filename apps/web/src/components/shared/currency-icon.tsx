'use client';

import Image from 'next/image';

interface CurrencyIconProps {
  currency: string;
  className?: string;
}

export function CurrencyIcon({ currency, className = "w-6 h-6" }: CurrencyIconProps) {
  const currencyCode = currency.toUpperCase();
  
  // Map currency codes to their favicon paths
  const getIconPath = (code: string): string | null => {
    const iconMap: { [key: string]: string } = {
      'USD': '/assets/logo/united_states.svg',
      'EUR': '/assets/logo/EU.svg',
      'GBP': '/assets/logo/united_kingdom.svg',
      'BRL': '/assets/logo/brl.png',
      'JPY': '/assets/logo/united_states.svg', // Fallback until JPY icon is added
    };
    
    return iconMap[code] || null;
  };

  const iconPath = getIconPath(currencyCode);

  if (iconPath) {
    return (
      <div 
        className={`currency-icon ${className}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src={iconPath}
          alt={currencyCode}
          width={24}
          height={24}
          className={className}
          unoptimized
        />
      </div>
    );
  }

  // Fallback to symbol if no icon found
  const getIconSymbol = (code: string) => {
    const symbols: { [key: string]: string } = {
      'JPY': '¥',
    };
    
    return symbols[code] || code[0];
  };

  return (
    <div 
      className={`currency-icon ${className}`}
      style={{
        color: '#0C2573',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(1.25rem - 1.5px)',
        fontWeight: 'bold',
      }}
    >
      {getIconSymbol(currencyCode)}
    </div>
  );
}

