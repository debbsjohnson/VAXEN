'use client';

import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp } from 'lucide-react';

// Mock data
const mockBalances = [
  { currency: 'USD', amount: '300,000.00', change: '+2.5%', changeType: 'positive' },
  { currency: 'EUR', amount: '191,250.00', change: '-1.2%', changeType: 'negative' },
  { currency: 'GBP', amount: '118,500.00', change: '+0.8%', changeType: 'positive' },
  { currency: 'BRL', amount: '375,000.00', change: '+1.5%', changeType: 'positive' },
];

const mockTransactions = [
  {
    id: '1',
    type: 'conversion',
    amount: '5,000.00',
    currency: 'USD',
    description: 'USD to EUR conversion',
    status: 'completed',
    date: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    type: 'payout',
    amount: '2,500.00',
    currency: 'EUR',
    description: 'Payment to supplier',
    status: 'processing',
    date: '2024-01-15T09:15:00Z',
  },
  {
    id: '3',
    type: 'deposit',
    amount: '10,000.00',
    currency: 'USD',
    description: 'Wire transfer received',
    status: 'completed',
    date: '2024-01-14T16:45:00Z',
  },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your treasury operations.
        </p>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockBalances.map((balance) => (
          <div key={balance.currency} className="p-6 bg-card border border-border rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {balance.currency} Balance
                </p>
                <p className="text-2xl font-bold text-foreground">{balance.amount}</p>
              </div>
              <DollarSign className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-2">
              {balance.changeType === 'positive' ? (
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
              )}
              <span className={balance.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}>
                {balance.change}
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="p-6 bg-card border border-border rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="h-20 flex flex-col items-center justify-center space-y-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            <TrendingUp className="h-6 w-6" />
            <span>Convert Currency</span>
          </button>
          <button className="h-20 flex flex-col items-center justify-center space-y-2 border border-border rounded-lg hover:bg-accent transition-colors">
            <ArrowUpRight className="h-6 w-6" />
            <span>Send Money</span>
          </button>
          <button className="h-20 flex flex-col items-center justify-center space-y-2 border border-border rounded-lg hover:bg-accent transition-colors">
            <DollarSign className="h-6 w-6" />
            <span>View Reports</span>
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="p-6 bg-card border border-border rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Transactions</h3>
        <div className="space-y-4">
          {mockTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {transaction.type === 'conversion' && <TrendingUp className="h-5 w-5 text-blue-500" />}
                  {transaction.type === 'payout' && <ArrowUpRight className="h-5 w-5 text-orange-500" />}
                  {transaction.type === 'deposit' && <ArrowDownRight className="h-5 w-5 text-green-500" />}
                </div>
                <div>
                  <p className="font-medium text-foreground">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(transaction.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-foreground">
                  {transaction.amount} {transaction.currency}
                </p>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  transaction.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
