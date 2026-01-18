'use client';

import { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Calendar,
  Filter,
  RefreshCw,
  Eye,
  FileText,
  PieChart,
  Activity,
  CreditCard,
  Wallet,
  Globe,
  ChevronDown,
  ChevronUp,
  Target,
  AlertCircle,
  CheckCircle,
  Clock,
  Zap,
  Shield,
  Building,
  Smartphone
} from 'lucide-react';

import { CurrencyIcon } from '@/components/shared/currency-icon';

// Mock data for key metrics
const mockKeyMetrics = [
  {
    title: 'Total Volume',
    value: '$2,847,392',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-green-400'
  },
  {
    title: 'Active Users',
    value: '1,247',
    change: '+8.2%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-400'
  },
  {
    title: 'Transactions',
    value: '8,934',
    change: '+15.3%',
    trend: 'up',
    icon: Activity,
    color: 'text-purple-400'
  },
  {
    title: 'Success Rate',
    value: '99.7%',
    change: '+0.2%',
    trend: 'up',
    icon: CheckCircle,
    color: 'text-green-400'
  }
];

// Mock data for transaction volume by currency
const mockVolumeByCurrency = [
  { currency: 'USD', volume: 1250000, percentage: 44, color: 'bg-blue-500' },
  { currency: 'EUR', volume: 850000, percentage: 30, color: 'bg-green-500' },
  { currency: 'GBP', volume: 450000, percentage: 16, color: 'bg-purple-500' },
  { currency: 'BRL', volume: 200000, percentage: 7, color: 'bg-orange-500' },
  { currency: 'Other', volume: 47392, percentage: 3, color: 'bg-gray-500' }
];

// Mock data for monthly trends
const mockMonthlyTrends = [
  { month: 'Jan', volume: 2100000, transactions: 7200, users: 1100 },
  { month: 'Feb', volume: 2350000, transactions: 7800, users: 1150 },
  { month: 'Mar', volume: 2200000, transactions: 7500, users: 1120 },
  { month: 'Apr', volume: 2500000, transactions: 8200, users: 1180 },
  { month: 'May', volume: 2650000, transactions: 8600, users: 1200 },
  { month: 'Jun', volume: 2800000, transactions: 8900, users: 1240 },
  { month: 'Jul', volume: 2750000, transactions: 8800, users: 1230 },
  { month: 'Aug', volume: 2900000, transactions: 9200, users: 1260 },
  { month: 'Sep', volume: 2700000, transactions: 8700, users: 1220 },
  { month: 'Oct', volume: 2847392, transactions: 8934, users: 1247 }
];

// Mock data for top countries
const mockTopCountries = [
  { country: 'United States', volume: 850000, percentage: 30, flag: '🇺🇸' },
  { country: 'United Kingdom', volume: 650000, percentage: 23, flag: '🇬🇧' },
  { country: 'Germany', volume: 420000, percentage: 15, flag: '🇩🇪' },
  { country: 'France', volume: 380000, percentage: 13, flag: '🇫🇷' },
  { country: 'Canada', volume: 320000, percentage: 11, flag: '🇨🇦' },
  { country: 'Australia', volume: 180000, percentage: 6, flag: '🇦🇺' },
  { country: 'Other', volume: 47392, percentage: 2, flag: '🌍' }
];

// Mock data for payment methods
const mockPaymentMethods = [
  { method: 'Wire Transfer', volume: 1200000, count: 3200, icon: Building, color: 'text-blue-400' },
  { method: 'Cryptocurrency', volume: 950000, count: 2800, icon: Wallet, color: 'text-green-400' },
  { method: 'SEPA Transfer', volume: 450000, count: 1800, icon: Globe, color: 'text-purple-400' },
  { method: 'ACH Transfer', volume: 247392, count: 1134, icon: CreditCard, color: 'text-orange-400' }
];

export function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedCurrency, setSelectedCurrency] = useState('all');
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    overview: true,
    volume: true,
    trends: false,
    countries: false,
    methods: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Reports & Analytics</h1>
          <p className="text-sm text-slate-300 mt-1">
            Comprehensive insights into your treasury operations and financial performance
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Currencies</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="BRL">BRL</option>
            </select>
          </div>
          <button className="flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </button>
          <button className="flex items-center px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-all">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockKeyMetrics.map((metric, index) => (
          <div key={index} className="gradient-card border border-slate-600 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">{metric.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
                <div className={`flex items-center mt-2 ${metric.color}`}>
                  {metric.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                  )}
                  <span className="text-sm font-medium">{metric.change}</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg bg-slate-800 ${metric.color}`}>
                <metric.icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Volume by Currency */}
      <div className="gradient-card border border-slate-600 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <PieChart className="h-5 w-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Volume by Currency</h3>
          </div>
          <button
            onClick={() => toggleSection('volume')}
            className="text-slate-400 hover:text-white"
          >
            {expandedSections.volume ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>
        
        {expandedSections.volume && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Currency Breakdown */}
              <div className="space-y-4">
                {mockVolumeByCurrency.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CurrencyIcon currency={item.currency} className="w-6 h-6" />
                      <span className="text-white font-medium">{item.currency}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-32 bg-slate-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${item.color}`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-white text-sm w-20 text-right">
                        {formatCurrency(item.volume)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Chart Representation */}
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full border-8 border-slate-700"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-green-500" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-orange-500" style={{ clipPath: 'polygon(50% 50%, 50% 100%, 0% 100%, 0% 50%)' }}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-purple-500" style={{ clipPath: 'polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">$2.8M</div>
                      <div className="text-xs text-slate-400">Total Volume</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Monthly Trends */}
      <div className="gradient-card border border-slate-600 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <BarChart3 className="h-5 w-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Monthly Trends</h3>
          </div>
          <button
            onClick={() => toggleSection('trends')}
            className="text-slate-400 hover:text-white"
          >
            {expandedSections.trends ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>
        
        {expandedSections.trends && (
          <div className="space-y-6">
            {/* Chart Representation */}
            <div className="h-64 bg-slate-800/50 rounded-lg p-4">
              <div className="flex items-end justify-between h-full space-x-2">
                {mockMonthlyTrends.map((month, index) => {
                  const maxVolume = Math.max(...mockMonthlyTrends.map(m => m.volume));
                  const height = (month.volume / maxVolume) * 100;
                  return (
                    <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                      <div className="flex flex-col items-center space-y-1">
                        <div
                          className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                          style={{ height: `${height}%`, minHeight: '20px' }}
                        />
                      </div>
                      <div className="text-xs text-slate-400">{month.month}</div>
                      <div className="text-xs text-white font-medium">{formatCurrency(month.volume / 1000000)}M</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Trend Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-slate-300">Volume Growth</span>
                </div>
                <div className="text-xl font-bold text-white mt-1">+35.4%</div>
                <div className="text-xs text-slate-400">vs last month</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-slate-300">Transaction Growth</span>
                </div>
                <div className="text-xl font-bold text-white mt-1">+24.1%</div>
                <div className="text-xs text-slate-400">vs last month</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-purple-400" />
                  <span className="text-sm text-slate-300">User Growth</span>
                </div>
                <div className="text-xl font-bold text-white mt-1">+13.4%</div>
                <div className="text-xs text-slate-400">vs last month</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Countries */}
        <div className="gradient-card border border-slate-600 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Globe className="h-5 w-5 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">Top Countries</h3>
            </div>
            <button
              onClick={() => toggleSection('countries')}
              className="text-slate-400 hover:text-white"
            >
              {expandedSections.countries ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          </div>
          
          {expandedSections.countries && (
            <div className="space-y-3">
              {mockTopCountries.map((country, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <div className="text-white font-medium">{country.country}</div>
                      <div className="text-xs text-slate-400">{country.percentage}% of total</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">{formatCurrency(country.volume)}</div>
                    <div className="text-xs text-slate-400">Volume</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Payment Methods */}
        <div className="gradient-card border border-slate-600 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <CreditCard className="h-5 w-5 text-orange-400" />
              <h3 className="text-lg font-semibold text-white">Payment Methods</h3>
            </div>
            <button
              onClick={() => toggleSection('methods')}
              className="text-slate-400 hover:text-white"
            >
              {expandedSections.methods ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          </div>
          
          {expandedSections.methods && (
            <div className="space-y-4">
              {mockPaymentMethods.map((method, index) => (
                <div key={index} className="p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <method.icon className={`h-5 w-5 ${method.color}`} />
                      <span className="text-white font-medium">{method.method}</span>
                    </div>
                    <span className="text-white font-bold">{formatCurrency(method.volume)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{formatNumber(method.count)} transactions</span>
                    <span>{((method.volume / 2847392) * 100).toFixed(1)}% of volume</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Performance Insights */}
      <div className="gradient-card border border-slate-600 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Target className="h-5 w-5 text-yellow-400" />
          <h3 className="text-lg font-semibold text-white">Performance Insights</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-sm text-slate-300">Security Score</span>
            </div>
            <div className="text-2xl font-bold text-white">98.5%</div>
            <div className="text-xs text-green-400">Excellent</div>
          </div>
          
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-slate-300">Avg. Processing Time</span>
            </div>
            <div className="text-2xl font-bold text-white">2.3s</div>
            <div className="text-xs text-green-400">Fast</div>
          </div>
          
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-slate-300">Success Rate</span>
            </div>
            <div className="text-2xl font-bold text-white">99.7%</div>
            <div className="text-xs text-green-400">Outstanding</div>
          </div>
          
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-slate-300">Avg. Fee</span>
            </div>
            <div className="text-2xl font-bold text-white">0.8%</div>
            <div className="text-xs text-green-400">Competitive</div>
          </div>
        </div>
      </div>
    </div>
  );
}