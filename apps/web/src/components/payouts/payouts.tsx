'use client';

import { useState } from 'react';
import {
  Send,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  CreditCard,
  Building,
  Wallet,
  Globe,
  ChevronDown,
  Calendar,
  DollarSign,
  TrendingUp,
  Shield,
  Zap,
  FileText,
  History,
  Settings
} from 'lucide-react';

import { CurrencyIcon } from '@/components/shared/currency-icon';

// Mock data for beneficiaries
const mockBeneficiaries = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    type: 'bank',
    bankName: 'Chase Bank',
    accountNumber: '****1234',
    routingNumber: '021000021',
    currency: 'USD',
    country: 'United States',
    status: 'verified',
    lastUsed: '2024-10-28T10:30:00Z'
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria@example.com',
    type: 'bank',
    bankName: 'Banco Santander',
    accountNumber: '****9012',
    routingNumber: 'ES9121000418450200051332',
    currency: 'EUR',
    country: 'Spain',
    status: 'verified',
    lastUsed: '2024-10-27T15:45:00Z'
  },
  {
    id: '3',
    name: 'David Chen',
    email: 'david@example.com',
    type: 'bank',
    bankName: 'HSBC',
    accountNumber: '****5678',
    routingNumber: '021000021',
    currency: 'GBP',
    country: 'United Kingdom',
    status: 'pending',
    lastUsed: '2024-10-25T09:15:00Z'
  }
];

// Mock data for recent payouts
const mockRecentPayouts = [
  {
    id: '1',
    beneficiary: 'John Smith',
    amount: '5000.00',
    currency: 'USD',
    type: 'wire',
    status: 'completed',
    date: '2024-10-28T14:30:00Z',
    reference: 'PAY-001',
    fee: '25.00'
  },
  {
    id: '2',
    beneficiary: 'Maria Garcia',
    amount: '2,500.00',
    currency: 'EUR',
    type: 'wire',
    status: 'processing',
    date: '2024-10-28T12:15:00Z',
    reference: 'PAY-002',
    fee: '15.00'
  },
  {
    id: '3',
    beneficiary: 'David Chen',
    amount: '3000.00',
    currency: 'GBP',
    type: 'sepa',
    status: 'pending',
    date: '2024-10-28T10:45:00Z',
    reference: 'PAY-003',
    fee: '15.00'
  },
  {
    id: '4',
    beneficiary: 'Sarah Johnson',
    amount: '1500.00',
    currency: 'USD',
    type: 'ach',
    status: 'failed',
    date: '2024-10-27T16:20:00Z',
    reference: 'PAY-004',
    fee: '5.00'
  }
];

export function Payouts() {
  const [activeTab, setActiveTab] = useState('send');
  const [selectedBeneficiary, setSelectedBeneficiary] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [payoutType, setPayoutType] = useState('wire');
  const [reference, setReference] = useState('');
  const [notes, setNotes] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'processing':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'pending':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'failed':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-3 w-3" />;
      case 'processing':
        return <Clock className="h-3 w-3" />;
      case 'pending':
        return <AlertCircle className="h-3 w-3" />;
      case 'failed':
        return <XCircle className="h-3 w-3" />;
      default:
        return <AlertCircle className="h-3 w-3" />;
    }
  };

  const getPayoutTypeIcon = (type: string) => {
    switch (type) {
      case 'wire':
        return <Building className="h-4 w-4" />;
      case 'crypto':
        return <Wallet className="h-4 w-4" />;
      case 'sepa':
        return <Globe className="h-4 w-4" />;
      case 'ach':
        return <CreditCard className="h-4 w-4" />;
      default:
        return <Send className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  const handleSendPayout = async () => {
    setIsProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    // Reset form
    setAmount('');
    setReference('');
    setNotes('');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Payouts</h1>
          <p className="text-sm text-slate-300 mt-1">
            Send payments to beneficiaries worldwide with competitive rates
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
            <History className="h-4 w-4 mr-2" />
            History
          </button>
          <button className="flex items-center px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-all">
            <Users className="h-4 w-4 mr-2" />
            Batch Payout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-lg w-fit">
        <button
          onClick={() => setActiveTab('send')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            activeTab === 'send'
              ? 'gradient-primary text-white shadow-lg'
              : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          Send Payment
        </button>
        <button
          onClick={() => setActiveTab('beneficiaries')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            activeTab === 'beneficiaries'
              ? 'gradient-primary text-white shadow-lg'
              : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          Beneficiaries
        </button>
        <button
          onClick={() => setActiveTab('recent')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            activeTab === 'recent'
              ? 'gradient-primary text-white shadow-lg'
              : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          Recent Payouts
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'send' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Send Payment Form */}
          <div className="lg:col-span-2">
            <div className="gradient-card border border-slate-600 rounded-lg p-6 pattern-overlay pattern-bg-10">
              <h3 className="text-lg font-semibold text-white mb-6">Send Payment</h3>
              
              <div className="space-y-6">
                {/* Beneficiary Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Select Beneficiary</label>
                  <div className="relative">
                    <select
                      value={selectedBeneficiary}
                      onChange={(e) => setSelectedBeneficiary(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    >
                      <option value="">Choose a beneficiary...</option>
                      {mockBeneficiaries.map((beneficiary) => (
                        <option key={beneficiary.id} value={beneficiary.id}>
                          {beneficiary.name} - {beneficiary.type === 'bank' ? beneficiary.bankName : beneficiary.currency}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                  <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center">
                    <Plus className="h-3 w-3 mr-1" />
                    Add new beneficiary
                  </button>
                </div>

                {/* Amount and Currency */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Amount</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Currency</label>
                    <div className="relative">
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="BRL">BRL</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Payout Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Payout Method</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'wire', label: 'Wire Transfer', icon: Building },
                      { value: 'crypto', label: 'Cryptocurrency', icon: Wallet },
                      { value: 'sepa', label: 'SEPA Transfer', icon: Globe },
                      { value: 'ach', label: 'ACH Transfer', icon: CreditCard }
                    ].map((method) => (
                      <button
                        key={method.value}
                        onClick={() => setPayoutType(method.value)}
                        className={`p-3 rounded-lg border transition-all ${
                          payoutType === method.value
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-slate-600 bg-slate-800 hover:bg-slate-700'
                        }`}
                      >
                        <method.icon className="h-5 w-5 text-white mb-2" />
                        <div className="text-sm text-white">{method.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reference */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Reference (Optional)</label>
                  <input
                    type="text"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    placeholder="Payment reference or invoice number"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Notes (Optional)</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Additional notes for this payment"
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Send Button */}
                <button
                  onClick={handleSendPayout}
                  disabled={isProcessing || !selectedBeneficiary || !amount}
                  className="w-full py-3 gradient-primary text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <Clock className="h-4 w-4 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Payment</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="space-y-6">
            {/* Payment Summary */}
            <div className="gradient-card border border-slate-600 rounded-lg p-6 pattern-overlay pattern-bg-11">
              <h3 className="text-lg font-semibold text-white mb-4">Payment Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Amount</span>
                  <span className="text-white">{amount || '0.00'} {currency}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Transfer Fee</span>
                  <span className="text-white">$25.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Exchange Rate</span>
                  <span className="text-white">1.0000</span>
                </div>
                <div className="border-t border-slate-600 pt-3">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-white">Total Cost</span>
                    <span className="text-white">${(parseFloat(amount || '0') + 25).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Tips */}
            <div className="gradient-card border border-slate-600 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Payment Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-green-400 mt-0.5" />
                  <div>
                    <div className="text-white text-sm font-medium">Secure Processing</div>
                    <div className="text-slate-400 text-xs">All payments are processed with bank-grade security</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <div>
                    <div className="text-white text-sm font-medium">Fast Delivery</div>
                    <div className="text-slate-400 text-xs">Most payments are delivered within 1-2 business days</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="h-5 w-5 text-blue-400 mt-0.5" />
                  <div>
                    <div className="text-white text-sm font-medium">Competitive Rates</div>
                    <div className="text-slate-400 text-xs">Low fees starting from $5 for domestic transfers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'beneficiaries' && (
        <div className="space-y-6">
          {/* Beneficiaries Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Beneficiaries</h3>
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                <Search className="h-4 w-4 mr-2" />
                Search
              </button>
              <button className="flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
              <button className="flex items-center px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-all">
                <Plus className="h-4 w-4 mr-2" />
                Add Beneficiary
              </button>
            </div>
          </div>

          {/* Beneficiaries Table */}
          <div className="gradient-card border border-slate-600 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="gradient-primary">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Type</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Details</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Currency</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Last Used</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {mockBeneficiaries.map((beneficiary) => (
                    <tr key={beneficiary.id} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-white">{beneficiary.name}</div>
                          <div className="text-xs text-slate-400">{beneficiary.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          {beneficiary.type === 'bank' ? (
                            <Building className="h-4 w-4 text-blue-400" />
                          ) : (
                            <Wallet className="h-4 w-4 text-green-400" />
                          )}
                          <span className="text-sm text-slate-300 capitalize">{beneficiary.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-300">
                          {beneficiary.accountNumber}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <CurrencyIcon currency={beneficiary.currency} className="w-5 h-5" />
                          <span className="text-sm text-white">{beneficiary.currency}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(beneficiary.status)}`}>
                          {getStatusIcon(beneficiary.status)}
                          <span className="ml-1 capitalize">{beneficiary.status}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">
                        {formatDate(beneficiary.lastUsed)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-slate-400 hover:text-blue-400 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-slate-400 hover:text-yellow-400 transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-slate-400 hover:text-red-400 transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'recent' && (
        <div className="space-y-6">
          {/* Recent Payouts Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Recent Payouts</h3>
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
              <button className="flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
          </div>

          {/* Recent Payouts Table */}
          <div className="gradient-card border border-slate-600 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="gradient-primary">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Reference</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Beneficiary</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Amount</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Type</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {mockRecentPayouts.map((payout) => (
                    <tr key={payout.id} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-white">{payout.reference}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-300">{payout.beneficiary}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <CurrencyIcon currency={payout.currency} className="w-5 h-5" />
                          <div>
                            <div className="text-sm font-medium text-white">{payout.amount} {payout.currency}</div>
                            <div className="text-xs text-slate-400">Fee: {payout.fee} {payout.currency}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          {getPayoutTypeIcon(payout.type)}
                          <span className="text-sm text-slate-300 capitalize">{payout.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(payout.status)}`}>
                          {getStatusIcon(payout.status)}
                          <span className="ml-1 capitalize">{payout.status}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">
                        {formatDate(payout.date)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-slate-400 hover:text-blue-400 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-slate-400 hover:text-green-400 transition-colors">
                            <FileText className="h-4 w-4" />
                          </button>
                        </div>
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