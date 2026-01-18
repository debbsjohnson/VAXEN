import * as React from 'react';
import { Input } from './input';
import { Label } from './label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { cn } from './lib/utils';

export interface AmountInputProps {
  amount: string;
  currency: string;
  onAmountChange: (amount: string) => void;
  onCurrencyChange: (currency: string) => void;
  currencies?: string[];
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const CURRENCIES = [
  'USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'SEK', 'NOK',
  'DKK', 'PLN', 'CZK', 'HUF', 'RON', 'BGN', 'HRK', 'RUB', 'TRY', 'ZAR',
  'BRL', 'MXN', 'INR', 'KRW', 'SGD', 'HKD', 'NZD', 'THB', 'MYR', 'PHP',
  'IDR', 'VND', 'BTC', 'ETH', 'USDC', 'USDT'
];

export const AmountInput = React.forwardRef<HTMLDivElement, AmountInputProps>(
  ({ 
    amount, 
    currency, 
    onAmountChange, 
    onCurrencyChange, 
    currencies = CURRENCIES,
    label,
    placeholder = "0.00",
    className,
    disabled = false,
    ...props 
  }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {label && <Label>{label}</Label>}
        <div className="flex space-x-2">
          <Input
            type="text"
            value={amount}
            onChange={(e) => onAmountChange((e.target as HTMLInputElement).value)}
            placeholder={placeholder}
            disabled={disabled}
            className="flex-1"
          />
          <Select value={currency} onValueChange={onCurrencyChange} disabled={disabled}>
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((curr) => (
                <SelectItem key={curr} value={curr}>
                  {curr}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    );
  }
);

AmountInput.displayName = 'AmountInput';
