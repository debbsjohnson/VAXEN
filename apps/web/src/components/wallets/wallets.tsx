'use client';

import { useState } from 'react';
import {
  Plus,
  Wallet,
  Coins,
  TrendingUp,
  ArrowDownRight,
  ArrowLeftRight,
  RefreshCw,
  Download,
  Search,
  Filter,
  Maximize2,
  CheckCircle,
  Clock,
  Eye,
  FileText,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight as ArrowDown,
  Loader2,
  XCircle
} from 'lucide-react';
import { CurrencyIcon } from '@/components/shared/currency-icon';

// Mock data for wallet balances
const mockWalletBalances = [
  {
    currency: 'USD',
    name: 'US Dollar',
    flag: '🇺🇸',
    available: '300,000.00',
    total: '300,000.00',
    usdValue: '300,000.00',
    change: '+2.1%',
    changeType: 'positive'
  },
  {
    currency: 'EUR',
    name: 'Euro',
    flag: '🇪🇺',
    available: '191,250.00',
    total: '191,250.00',
    usdValue: '225,000.00',
    change: '-0.8%',
    changeType: 'negative'
  },
  {
    currency: 'GBP',
    name: 'British Pound',
    flag: '🇬🇧',
    available: '118,500.00',
    total: '118,500.00',
    usdValue: '150,000.00',
    change: '+1.2%',
    changeType: 'positive'
  },
  {
    currency: 'BRL',
    name: 'Brazilian Real',
    available: '375,000.00',
    total: '375,000.00',
    usdValue: '75,000.00',
    change: '+1.5%',
    changeType: 'positive'
  },
];

// Mock transaction history
const mockTransactions = [
  {
    id: '1',
    date: '2025-01-15T13:03:28Z',
    type: 'conversion',
    currency: 'BRL',
    amount: '12,500.00',
    rate: '5.0',
    description: 'USD to BRL Conversion',
    status: 'completed'
  },
  {
    id: '2',
    date: '2025-01-14T10:15:42Z',
    type: 'withdrawal',
    currency: 'USD',
    amount: '1,500.00',
    rate: '1.00000000',
    description: 'Wire Transfer to Bank',
    status: 'completed'
  },
  {
    id: '3',
    date: '2025-01-13T16:22:15Z',
    type: 'conversion',
    currency: 'GBP',
    amount: '850.00',
    rate: '0.79',
    description: 'USD to GBP Conversion',
    status: 'completed'
  },
  {
    id: '4',
    date: '2025-01-12T09:45:33Z',
    type: 'withdrawal',
    currency: 'EUR',
    amount: '2,000.00',
    rate: '0.85',
    description: 'SEPA Transfer',
    status: 'pending'
  },
  {
    id: '5',
    date: '2025-01-11T14:18:27Z',
    type: 'conversion',
    currency: 'BRL',
    amount: '5,000.00',
    rate: '5.0',
    description: 'USD to BRL Conversion',
    status: 'completed'
  },
  {
    id: '6',
    date: '2025-01-10T11:30:15Z',
    type: 'withdrawal',
    currency: 'GBP',
    amount: '800.00',
    rate: '0.79',
    description: 'UK Bank Transfer',
    status: 'completed'
  },
  {
    id: '7',
    date: '2025-01-09T08:45:22Z',
    type: 'conversion',
    currency: 'EUR',
    amount: '1,200.00',
    rate: '0.85',
    description: 'USD to EUR Conversion',
    status: 'completed'
  },
  {
    id: '8',
    date: '2025-01-08T15:20:18Z',
    type: 'withdrawal',
    currency: 'BRL',
    amount: '2,500.00',
    rate: '5.0',
    description: 'Brazil Bank Transfer',
    status: 'completed'
  },
  {
    id: '9',
    date: '2025-01-07T12:10:45Z',
    type: 'conversion',
    currency: 'BRL',
    amount: '6,000.00',
    rate: '5.0',
    description: 'EUR to BRL Conversion',
    status: 'completed'
  },
  {
    id: '10',
    date: '2025-01-06T09:35:30Z',
    type: 'withdrawal',
    currency: 'USD',
    amount: '750.00',
    rate: '1.00000000',
    description: 'ACH Transfer',
    status: 'processing'
  },
  {
    id: '11',
    date: '2025-01-05T14:55:12Z',
    type: 'conversion',
    currency: 'BRL',
    amount: '1,250.00',
    rate: '5.0',
    description: 'USD to BRL Conversion',
    status: 'completed'
  },
  {
    id: '12',
    date: '2025-01-04T16:40:08Z',
    type: 'withdrawal',
    currency: 'BRL',
    amount: '2,500.00',
    rate: '5.0',
    description: 'Brazil Bank Transfer',
    status: 'completed'
  },
  {
    id: '13',
    date: '2025-01-03T10:25:35Z',
    type: 'conversion',
    currency: 'EUR',
    amount: '2,550.00',
    rate: '0.85',
    description: 'Multi-Currency Consolidation',
    status: 'completed'
  },
  {
    id: '14',
    date: '2025-01-02T13:15:20Z',
    type: 'withdrawal',
    currency: 'GBP',
    amount: '1,200.00',
    rate: '0.79',
    description: 'International Wire',
    status: 'pending'
  },
  {
    id: '15',
    date: '2025-01-01T11:00:00Z',
    type: 'conversion',
    currency: 'BRL',
    amount: '12,500.00',
    rate: '5.0',
    description: 'New Year Portfolio Rebalance',
    status: 'completed'
  },
  {
    id: '16',
    date: '2024-12-30T14:22:15Z',
    type: 'deposit',
    currency: 'USD',
    amount: '5,000.00',
    rate: '1.00000000',
    description: 'Wire Transfer from Business Account',
    status: 'completed'
  },
  {
    id: '17',
    date: '2024-12-28T09:15:30Z',
    type: 'deposit',
    currency: 'EUR',
    amount: '3,500.00',
    rate: '0.85',
    description: 'SEPA Credit Transfer',
    status: 'completed'
  },
  {
    id: '18',
    date: '2024-12-25T16:45:12Z',
    type: 'deposit',
    currency: 'GBP',
    amount: '2,200.00',
    rate: '0.79',
    description: 'UK Faster Payments',
    status: 'completed'
  },
  {
    id: '19',
    date: '2024-12-22T11:30:45Z',
    type: 'deposit',
    currency: 'BRL',
    amount: '9,000.00',
    rate: '5.0',
    description: 'Brazil Bank Deposit',
    status: 'completed'
  },
  {
    id: '20',
    date: '2024-12-20T13:18:22Z',
    type: 'deposit',
    currency: 'BRL',
    amount: '25,000.00',
    rate: '5.0',
    description: 'Brazil Bank Deposit',
    status: 'completed'
  },
  {
    id: '21',
    date: '2024-12-18T10:55:33Z',
    type: 'deposit',
    currency: 'GBP',
    amount: '1,500.00',
    rate: '0.79',
    description: 'UK Bank Deposit',
    status: 'completed'
  },
  {
    id: '22',
    date: '2024-12-15T15:42:18Z',
    type: 'deposit',
    currency: 'EUR',
    amount: '2,500.00',
    rate: '0.85',
    description: 'European Bank Deposit',
    status: 'completed'
  },
  {
    id: '23',
    date: '2024-12-12T08:25:40Z',
    type: 'deposit',
    currency: 'BRL',
    amount: '25,000.00',
    rate: '5.0',
    description: 'Brazil Wire Transfer',
    status: 'completed'
  },
  {
    id: '24',
    date: '2024-12-10T12:15:55Z',
    type: 'deposit',
    currency: 'USD',
    amount: '1,200.00',
    rate: '1.00000000',
    description: 'ACH Direct Deposit',
    status: 'completed'
  },
  {
    id: '25',
    date: '2024-12-08T14:33:27Z',
    type: 'deposit',
    currency: 'EUR',
    amount: '800.00',
    rate: '0.85',
    description: 'International Wire Transfer',
    status: 'processing'
  },
  {
    id: '26',
    date: '2024-12-05T16:20:14Z',
    type: 'deposit',
    currency: 'GBP',
    amount: '1,500.00',
    rate: '0.79',
    description: 'Bank Transfer Deposit',
    status: 'completed'
  }
];

export function Wallets() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [activeTab, setActiveTab] = useState('balances');
  const [transactionFilter, setTransactionFilter] = useState('all');

  const totalBalance = mockWalletBalances.reduce((sum, balance) => {
    return sum + parseFloat(balance.usdValue.replace(/,/g, ''));
  }, 0);

  // Filter transactions based on selected filter
  const filteredTransactions = mockTransactions.filter(transaction => {
    if (transactionFilter === 'all') return true;
    return transaction.type === transactionFilter;
  });

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">My Wallet</h1>
          <p className="text-sm text-slate-300 mt-1">
            Manage your multi-currency treasury and transaction history
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 gradient-primary text-white text-sm rounded-lg hover:opacity-90 transition-all shadow-lg">
            <Plus className="w-4 h-4 mr-2 inline" />
            Add Funds
          </button>
          <button className="p-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Total Balance Card */}
      <div className="p-6 gradient-primary text-white rounded-lg shadow-2xl pattern-overlay-blur pattern-bg-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-medium opacity-90">TOTAL PORTFOLIO VALUE</p>
            <p className="text-3xl font-bold mt-1">${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>
          <div className="flex items-center space-x-2">
            <select 
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="px-3 py-1 bg-white/20 text-white text-sm rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
            <button className="p-2 bg-white/20 text-white rounded-md hover:bg-white/30 transition-colors">
              <TrendingUp className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <button className="flex items-center justify-center space-x-2 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
            <ArrowDownRight className="h-4 w-4" />
            <span className="text-sm font-medium">Fund Wallet</span>
          </button>
          <button className="flex items-center justify-center space-x-2 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
            <ArrowLeftRight className="h-4 w-4" />
            <span className="text-sm font-medium">Move Money</span>
          </button>
          <button className="flex items-center justify-center space-x-2 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">Convert</span>
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('balances')}
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all ${
            activeTab === 'balances'
              ? 'gradient-primary text-white shadow-lg'
              : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          All Balances
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all ${
            activeTab === 'history'
              ? 'gradient-primary text-white shadow-lg'
              : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          Transaction History
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'balances' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockWalletBalances.map((balance) => (
            <div key={balance.currency} className="p-4 gradient-card border border-slate-600 rounded-lg pattern-overlay pattern-bg-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <CurrencyIcon currency={balance.currency} className="w-8 h-8" />
                  <div>
                    <p className="text-sm font-medium text-white">{balance.name}</p>
                    <p className="text-xs text-slate-300">{balance.currency}</p>
                  </div>
                </div>
                <button className="p-1 text-slate-400 hover:text-white transition-colors">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>

              <div className="mb-3">
                <p className="text-lg font-bold text-white">
                  {balance.currency === 'USD' ? '$' : balance.currency === 'EUR' ? '€' : balance.currency === 'GBP' ? '£' : balance.currency === 'BRL' ? 'R$' : '$'}{balance.available}
                </p>
                <p className="text-sm text-slate-300">
                  ${balance.usdValue} USD
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm">
                  {balance.changeType === 'positive' ? (
                    <ArrowUpRight className="h-3 w-3 text-green-400 mr-1" />
                  ) : (
                    <ArrowDown className="h-3 w-3 text-red-400 mr-1" />
                  )}
                  <span className={balance.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}>
                    {balance.change}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1 text-slate-400 hover:text-white transition-colors">
                    <FileText className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-slate-400 hover:text-white transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'history' && (
        <div className="space-y-6">
          {/* Transaction History Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Transaction History</h3>
            <div className="flex items-center space-x-2">
              <button className="p-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
                <Download className="h-4 w-4" />
              </button>
              <button className="p-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
                <Search className="h-4 w-4" />
              </button>
              <button className="p-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors">
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Transaction Type Filters */}
          <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-lg">
            <button
              onClick={() => setTransactionFilter('all')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all ${
                transactionFilter === 'all'
                  ? 'gradient-primary text-white shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              All ({mockTransactions.length})
            </button>
            <button
              onClick={() => setTransactionFilter('conversion')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all ${
                transactionFilter === 'conversion'
                  ? 'gradient-primary text-white shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              Conversions ({mockTransactions.filter(t => t.type === 'conversion').length})
            </button>
            <button
              onClick={() => setTransactionFilter('withdrawal')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all ${
                transactionFilter === 'withdrawal'
                  ? 'gradient-primary text-white shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              Withdrawals ({mockTransactions.filter(t => t.type === 'withdrawal').length})
            </button>
            <button
              onClick={() => setTransactionFilter('deposit')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all ${
                transactionFilter === 'deposit'
                  ? 'gradient-primary text-white shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              Deposits ({mockTransactions.filter(t => t.type === 'deposit').length})
            </button>
          </div>

          {/* Transaction Table */}
          <div className="gradient-card border border-slate-600 rounded-lg overflow-hidden pattern-overlay pattern-bg-7">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="gradient-primary">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Type</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Currency</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Amount</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Rate</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Description</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-3 text-sm text-slate-300">
                        {new Date(transaction.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: 'numeric',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-300 capitalize">
                        {transaction.type}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-300">
                        {transaction.currency}
                      </td>
                      <td className="px-4 py-3 text-sm text-white font-medium">
                        {transaction.amount}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-300">
                        {transaction.rate}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-300">
                        {transaction.description}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          transaction.status === 'completed' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : transaction.status === 'processing'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : transaction.status === 'pending'
                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}>
                          {transaction.status === 'completed' ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : transaction.status === 'processing' ? (
                            <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                          ) : transaction.status === 'pending' ? (
                            <Clock className="h-3 w-3 mr-1" />
                          ) : (
                            <XCircle className="h-3 w-3 mr-1" />
                          )}
                          {transaction.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
