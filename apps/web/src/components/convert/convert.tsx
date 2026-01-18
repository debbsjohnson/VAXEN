'use client';

import { useState, useEffect } from 'react';
import {
  ArrowLeftRight,
  TrendingUp,
  TrendingDown,
  Clock,
  Shield,
  Zap,
  RefreshCw,
  Calculator,
  Info,
  ChevronDown,
  Star,
  AlertCircle,
  CheckCircle,
  Eye,
  EyeOff
} from 'lucide-react';

import { CurrencyIcon } from '@/components/shared/currency-icon';

// Mock exchange rates (in real app, this would come from API)
const mockExchangeRates = {
  USD: { EUR: 0.85, GBP: 0.79, BRL: 5.0 },
  EUR: { USD: 1.18, GBP: 0.93, BRL: 5.9 },
  GBP: { USD: 1.27, EUR: 1.08, BRL: 6.35 },
  BRL: { USD: 0.20, EUR: 0.17, GBP: 0.16 },
};

const currencies = [
  { code: 'USD', name: 'US Dollar', type: 'fiat', symbol: '$' },
  { code: 'EUR', name: 'Euro', type: 'fiat', symbol: '€' },
  { code: 'GBP', name: 'British Pound', type: 'fiat', symbol: '£' },
  { code: 'BRL', name: 'Brazilian Real', type: 'fiat', symbol: 'R$' },
];

export function Convert() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [fromAmount, setFromAmount] = useState('1000');
  const [toAmount, setToAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [slippage, setSlippage] = useState(0.5);
  const [deadline, setDeadline] = useState(20);
  const [showRateDetails, setShowRateDetails] = useState(false);

  // Calculate conversion
  useEffect(() => {
    if (fromAmount && fromCurrency && toCurrency) {
      const fromRates = mockExchangeRates[fromCurrency as keyof typeof mockExchangeRates] as Record<string, number> | undefined;
      const rate = fromRates?.[toCurrency];
      if (rate) {
        setExchangeRate(rate);
        const converted = parseFloat(fromAmount) * rate;
        setToAmount(converted.toFixed(8));
      }
    }
  }, [fromAmount, fromCurrency, toCurrency]);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
  };

  const handleConvert = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    // In real app, this would trigger the actual conversion
  };

  const getCurrencyInfo = (code: string) => {
    return currencies.find(c => c.code === code);
  };

  const formatAmount = (amount: string, currency: string) => {
    const info = getCurrencyInfo(currency);
    if (!info) return amount;
    
    const num = parseFloat(amount);
    if (info.type === 'crypto') {
      return num.toFixed(8);
    }
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Convert Currency</h1>
          <p className="text-sm text-slate-300 mt-1">
            Exchange between fiat currencies and cryptocurrencies with competitive rates
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
            <RefreshCw className="h-4 w-4" />
          </button>
          <button className="p-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
            <Calculator className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Conversion Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Conversion Form */}
          <div className="gradient-card border border-slate-600 rounded-lg p-6 pattern-overlay pattern-bg-8">
            <div className="space-y-6">
              {/* From Currency */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">From</label>
                <div className="flex space-x-3">
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="number"
                        value={fromAmount}
                        onChange={(e) => setFromAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      />
                    </div>
                  </div>
                  <div className="w-32">
                    <div className="relative">
                      <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                      >
                        {currencies.map((currency) => (
                          <option key={currency.code} value={currency.code}>
                            {currency.code}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <span>{getCurrencyInfo(fromCurrency)?.name}</span>
                  <span>•</span>
                  <span>Balance: {formatAmount('50000', fromCurrency)} {fromCurrency}</span>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleSwapCurrencies}
                  className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors"
                >
                  <ArrowLeftRight className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* To Currency */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">To</label>
                <div className="flex space-x-3">
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="text"
                        value={formatAmount(toAmount, toCurrency)}
                        readOnly
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white text-lg"
                      />
                    </div>
                  </div>
                  <div className="w-32">
                    <div className="relative">
                      <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                      >
                        {currencies.map((currency) => (
                          <option key={currency.code} value={currency.code}>
                            {currency.code}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <span>{getCurrencyInfo(toCurrency)?.name}</span>
                  <span>•</span>
                  <span>Balance: {formatAmount('2.5', toCurrency)} {toCurrency}</span>
                </div>
              </div>

              {/* Exchange Rate */}
              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-300">Exchange Rate</span>
                  <button
                    onClick={() => setShowRateDetails(!showRateDetails)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <Info className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-white">
                    1 {fromCurrency} = {exchangeRate.toFixed(8)} {toCurrency}
                  </div>
                  <div className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +0.12% (24h)
                  </div>
                </div>
              </div>

              {/* Advanced Options */}
              <div className="space-y-3">
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="flex items-center space-x-2 text-sm text-blue-400 hover:text-blue-300"
                >
                  <span>Advanced Options</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
                </button>
                
                {showAdvanced && (
                  <div className="space-y-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-slate-300">Slippage Tolerance</label>
                        <div className="flex space-x-2 mt-1">
                          <input
                            type="number"
                            value={slippage}
                            onChange={(e) => setSlippage(parseFloat(e.target.value))}
                            className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm"
                          />
                          <span className="text-slate-400 text-sm py-2">%</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-slate-300">Deadline</label>
                        <div className="flex space-x-2 mt-1">
                          <input
                            type="number"
                            value={deadline}
                            onChange={(e) => setDeadline(parseInt(e.target.value))}
                            className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm"
                          />
                          <span className="text-slate-400 text-sm py-2">min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Convert Button */}
              <button
                onClick={handleConvert}
                disabled={isLoading || !fromAmount || !toAmount}
                className="w-full py-3 gradient-primary text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>Converting...</span>
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4" />
                    <span>Convert {fromAmount} {fromCurrency} to {toCurrency}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Recent Conversions */}
          <div className="gradient-card border border-slate-600 rounded-lg p-6 pattern-overlay pattern-bg-9">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Conversions</h3>
            <div className="space-y-3">
              {[
                { from: 'USD', to: 'BTC', amount: '5000', rate: '0.000023', time: '2 min ago', status: 'completed' },
                { from: 'EUR', to: 'ETH', amount: '2000', rate: '0.000407', time: '15 min ago', status: 'completed' },
                { from: 'GBP', to: 'USDC', amount: '1000', rate: '1.27', time: '1 hour ago', status: 'completed' },
              ].map((conversion, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <CurrencyIcon currency={conversion.from} className="w-5 h-5" />
                      <span className="text-white text-sm">{conversion.amount} {conversion.from}</span>
                    </div>
                    <ArrowLeftRight className="h-4 w-4 text-slate-400" />
                    <div className="flex items-center space-x-1">
                      <CurrencyIcon currency={conversion.to} className="w-5 h-5" />
                      <span className="text-white text-sm">{conversion.to}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">{conversion.time}</div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-3 w-3 text-green-400" />
                      <span className="text-xs text-green-400 capitalize">{conversion.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Market Overview */}
          <div className="gradient-card border border-slate-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Market Overview</h3>
            <div className="space-y-3">
              {[
                { currency: 'BTC', price: '$43,500', change: '+2.4%', trend: 'up' },
                { currency: 'ETH', price: '$2,900', change: '+1.8%', trend: 'up' },
                { currency: 'USDC', price: '$1.00', change: '0.0%', trend: 'neutral' },
                { currency: 'SOL', price: '$22.20', change: '-0.5%', trend: 'down' },
              ].map((market) => (
                <div key={market.currency} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CurrencyIcon currency={market.currency} className="w-6 h-6" />
                    <div>
                      <div className="text-white font-medium">{market.currency}</div>
                      <div className="text-slate-400 text-sm">{market.price}</div>
                    </div>
                  </div>
                  <div className={`text-sm font-medium flex items-center ${
                    market.trend === 'up' ? 'text-green-400' : 
                    market.trend === 'down' ? 'text-red-400' : 'text-slate-400'
                  }`}>
                    {market.trend === 'up' && <TrendingUp className="h-3 w-3 mr-1" />}
                    {market.trend === 'down' && <TrendingDown className="h-3 w-3 mr-1" />}
                    {market.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conversion Tips */}
          <div className="gradient-card border border-slate-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Conversion Tips</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <div className="text-white text-sm font-medium">Secure & Fast</div>
                  <div className="text-slate-400 text-xs">All conversions are processed securely with bank-grade encryption</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <div className="text-white text-sm font-medium">Real-time Rates</div>
                  <div className="text-slate-400 text-xs">Exchange rates are updated in real-time for accurate conversions</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div>
                  <div className="text-white text-sm font-medium">Low Fees</div>
                  <div className="text-slate-400 text-xs">Competitive fees starting from 0.1% for most conversions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="gradient-card border border-slate-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full p-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm transition-colors">
                Set Price Alert
              </button>
              <button className="w-full p-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm transition-colors">
                View Conversion History
              </button>
              <button className="w-full p-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm transition-colors">
                Download Rates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}