'use client';

import { useState } from 'react';
import {
  Search,
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Shield,
  CreditCard,
  Wallet,
  ArrowLeftRight,
  Send,
  Users,
  BarChart3,
  Settings,
  AlertCircle,
  CheckCircle,
  Info,
  Zap,
  Globe,
  Lock,
  Eye,
  FileText,
  Headphones
} from 'lucide-react';

// Mock FAQ data
const faqCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: BookOpen,
    questions: [
      {
        question: 'How do I create my first wallet?',
        answer: 'To create your first wallet, navigate to the Wallets page and click "Add New Wallet". Select your preferred currency (USD, EUR, GBP, BRL) and follow the setup wizard. Your wallet will be ready for deposits and transactions within minutes.'
      },
      {
        question: 'What currencies does Vaxen support?',
        answer: 'Vaxen supports major fiat currencies (USD, EUR, GBP, BRL). We continuously add new currencies based on user demand and regulatory compliance.'
      },
      {
        question: 'How do I verify my account?',
        answer: 'Account verification is required for higher transaction limits and full platform access. Go to Settings > Profile and upload your government-issued ID, proof of address, and complete the KYC process. Verification typically takes 1-3 business days.'
      },
      {
        question: 'What are the transaction limits?',
        answer: 'Transaction limits vary by verification level: Unverified accounts can send up to $1,000 daily. Basic verification allows up to $10,000 daily. Full verification enables unlimited transactions with additional compliance checks for large amounts.'
      }
    ]
  },
  {
    id: 'wallets',
    title: 'Wallets & Balances',
    icon: Wallet,
    questions: [
      {
        question: 'How do I deposit funds into my wallet?',
        answer: 'Deposits can be made via bank transfer, wire transfer, or cryptocurrency. For fiat currencies, use the deposit section in your wallet to get account details. For crypto, use the provided wallet addresses. Deposits are typically credited within 1-24 hours depending on the method.'
      },
      {
        question: 'Are my funds insured?',
        answer: 'Yes, Vaxen maintains comprehensive insurance coverage for all customer funds. We use cold storage for cryptocurrency and maintain FDIC insurance for USD deposits. Your funds are protected against theft, loss, and unauthorized access.'
      },
      {
        question: 'How do I withdraw my funds?',
        answer: 'Withdrawals can be made to your verified bank account or cryptocurrency wallet. Go to the Payouts page, select your withdrawal method, enter the amount, and confirm. Processing times vary: bank transfers (1-3 days), crypto withdrawals (15-60 minutes).'
      },
      {
        question: 'What are the withdrawal fees?',
        answer: 'Withdrawal fees are transparent and competitive: Bank transfers: $10-25 depending on destination. Cryptocurrency: Network fees only (typically $1-10). SEPA transfers: €5. ACH transfers: $2. All fees are clearly displayed before confirmation.'
      }
    ]
  },
  {
    id: 'conversions',
    title: 'Currency Conversion',
    icon: ArrowLeftRight,
    questions: [
      {
        question: 'How do I convert between currencies?',
        answer: 'Use the Convert page to exchange between any supported currencies. Enter the amount you want to convert, select source and destination currencies, review the exchange rate and fees, then confirm. Conversions are processed instantly for most currency pairs.'
      },
      {
        question: 'What exchange rates do you use?',
        answer: 'We use real-time market rates from multiple liquidity providers to ensure competitive pricing. Our rates are updated continuously and include a small spread (typically 0.1-0.5%) to cover operational costs. You can see the exact rate before confirming any conversion.'
      },
      {
        question: 'Are there conversion limits?',
        answer: 'Conversion limits depend on your account verification level and the currency pair. Most users can convert up to $50,000 daily without additional approval. Large conversions may require additional verification or be processed in batches for security.'
      },
      {
        question: 'Can I set up automatic conversions?',
        answer: 'Yes, you can set up recurring conversions in the Convert page. Choose your source and destination currencies, amount, frequency (daily, weekly, monthly), and we\'ll automatically execute the conversion at the best available rate.'
      }
    ]
  },
  {
    id: 'payouts',
    title: 'Payouts & Transfers',
    icon: Send,
    questions: [
      {
        question: 'How do I send money to someone?',
        answer: 'Use the Payouts page to send money to bank accounts or crypto wallets. Add the recipient as a beneficiary, enter the amount and currency, select the transfer method, and confirm. You can save beneficiaries for future use.'
      },
      {
        question: 'What information do I need for international transfers?',
        answer: 'For international bank transfers, you\'ll need: recipient\'s full name, bank name, account number, SWIFT/BIC code, and bank address. For some countries, you may also need IBAN, routing number, or other local banking codes.'
      },
      {
        question: 'How long do transfers take?',
        answer: 'Transfer times vary by method: Domestic bank transfers: 1-2 business days. International wire transfers: 2-5 business days. SEPA transfers: 1-2 business days. Cryptocurrency: 15-60 minutes. ACH transfers: 1-3 business days.'
      },
      {
        question: 'Can I cancel a transfer?',
        answer: 'Transfers can only be cancelled if they haven\'t been processed yet. Check the status in your Payouts history. If it shows "Processing" or "Completed", the transfer cannot be cancelled. Contact support immediately if you need assistance.'
      }
    ]
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    icon: Shield,
    questions: [
      {
        question: 'How is my account secured?',
        answer: 'Your account is protected by multiple security layers: 2FA authentication, biometric login, device verification, encrypted data transmission, and regular security audits. We also monitor for suspicious activity and will alert you of any unusual transactions.'
      },
      {
        question: 'What should I do if I suspect unauthorized access?',
        answer: 'Immediately change your password, enable 2FA if not already active, and contact our security team. We\'ll freeze your account, investigate the incident, and help you secure your funds. Report any suspicious activity as soon as possible.'
      },
      {
        question: 'How do I enable two-factor authentication?',
        answer: 'Go to Settings > Security and click "Enable 2FA". You can use an authenticator app (Google Authenticator, Authy) or SMS. We recommend using an authenticator app for better security. Follow the setup wizard to complete the process.'
      },
      {
        question: 'Is my personal information safe?',
        answer: 'Yes, we use bank-level encryption and security measures to protect your personal information. We comply with GDPR, CCPA, and other privacy regulations. Your data is never sold to third parties and is only used to provide our services.'
      }
    ]
  },
  {
    id: 'billing',
    title: 'Fees & Billing',
    icon: CreditCard,
    questions: [
      {
        question: 'What are your fees?',
        answer: 'Our fees are transparent and competitive: Account maintenance: Free. Deposits: Free for most methods. Withdrawals: $2-25 depending on method. Currency conversion: 0.1-0.5% spread. International transfers: $10-25. All fees are clearly displayed before any transaction.'
      },
      {
        question: 'How do I view my transaction history?',
        answer: 'Your complete transaction history is available in the Reports page. You can filter by date range, currency, transaction type, and status. Export your data as CSV or PDF for accounting purposes. All transactions include detailed receipts and confirmations.'
      },
      {
        question: 'Can I get a refund?',
        answer: 'Refunds are available for certain types of transactions within 30 days. Processing errors, duplicate transactions, or unauthorized charges are eligible for refunds. Contact support with your transaction ID and reason for the refund request.'
      },
      {
        question: 'Do you offer business accounts?',
        answer: 'Yes, we offer specialized business accounts with higher limits, dedicated support, API access, and custom features. Business accounts require additional verification and compliance checks. Contact our sales team to learn more about business solutions.'
      }
    ]
  }
];

// Mock support resources
const supportResources = [
  {
    title: 'User Guide',
    description: 'Complete guide to using Vaxen Finance',
    icon: BookOpen,
    type: 'guide',
    url: '#'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video walkthroughs',
    icon: Video,
    type: 'video',
    url: '#'
  },
  {
    title: 'API Documentation',
    description: 'Developer resources and API reference',
    icon: FileText,
    type: 'documentation',
    url: '#'
  },
  {
    title: 'Security Best Practices',
    description: 'Keep your account secure',
    icon: Shield,
    type: 'security',
    url: '#'
  },
  {
    title: 'Compliance Guide',
    description: 'Regulatory and compliance information',
    icon: Lock,
    type: 'compliance',
    url: '#'
  },
  {
    title: 'Download Mobile App',
    description: 'Get the Vaxen mobile app',
    icon: Download,
    type: 'mobile',
    url: '#'
  }
];

// Mock contact methods
const contactMethods = [
  {
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    icon: MessageCircle,
    availability: '24/7',
    responseTime: 'Instant',
    action: 'Start Chat'
  },
  {
    title: 'Email Support',
    description: 'Send us a detailed message',
    icon: Mail,
    availability: '24/7',
    responseTime: '< 2 hours',
    action: 'Send Email'
  },
  {
    title: 'Phone Support',
    description: 'Speak with a support specialist',
    icon: Phone,
    availability: 'Mon-Fri 9AM-6PM EST',
    responseTime: 'Immediate',
    action: 'Call Now'
  },
  {
    title: 'Video Call',
    description: 'Schedule a screen sharing session',
    icon: Video,
    availability: 'By appointment',
    responseTime: 'Same day',
    action: 'Schedule Call'
  }
];

export function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const filteredCategories = faqCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.questions.some(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Help & Support</h1>
        <p className="text-sm text-slate-300 mt-2">
          Find answers to common questions and get help when you need it.
        </p>
      </div>

      {/* Search Bar */}
      <div className="gradient-card border border-slate-600 rounded-lg p-6 shadow-lg">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search for help articles, FAQs, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {contactMethods.map((method, index) => (
          <div key={index} className="gradient-card border border-slate-600 rounded-lg p-4 shadow-lg hover:border-blue-500/50 transition-colors cursor-pointer">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <method.icon className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{method.title}</h3>
                <p className="text-xs text-slate-400">{method.availability}</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 mb-3">{method.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-green-400">{method.responseTime}</span>
              <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                {method.action}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Support Resources */}
      <div className="gradient-card border border-slate-600 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-6">Support Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportResources.map((resource, index) => (
            <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3 mb-2">
                <resource.icon className="h-5 w-5 text-blue-400" />
                <h3 className="text-white font-semibold">{resource.title}</h3>
              </div>
              <p className="text-sm text-slate-300 mb-3">{resource.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 capitalize">{resource.type}</span>
                <ExternalLink className="h-4 w-4 text-blue-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white">Frequently Asked Questions</h2>
        
        {filteredCategories.map((category) => (
          <div key={category.id} className="gradient-card border border-slate-600 rounded-lg shadow-lg">
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/30 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <category.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  <p className="text-sm text-slate-400">{category.questions.length} questions</p>
                </div>
              </div>
              {expandedCategory === category.id ? (
                <ChevronUp className="h-5 w-5 text-slate-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-slate-400" />
              )}
            </button>

            {expandedCategory === category.id && (
              <div className="border-t border-slate-700">
                {category.questions.map((faq, index) => (
                  <div key={index} className="border-b border-slate-700 last:border-b-0">
                    <button
                      onClick={() => toggleQuestion(`${category.id}-${index}`)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800/20 transition-colors"
                    >
                      <span className="text-white font-medium pr-4">{faq.question}</span>
                      {expandedQuestion === `${category.id}-${index}` ? (
                        <ChevronUp className="h-4 w-4 text-slate-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    {expandedQuestion === `${category.id}-${index}` && (
                      <div className="px-4 pb-4">
                        <p className="text-slate-300 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Emergency Contact */}
      <div className="gradient-card border border-red-500/30 rounded-lg p-6 shadow-lg bg-red-500/5">
        <div className="flex items-center space-x-3 mb-4">
          <AlertCircle className="h-6 w-6 text-red-400" />
          <h3 className="text-lg font-semibold text-white">Emergency Support</h3>
        </div>
        <p className="text-slate-300 text-sm mb-4">
          If you suspect unauthorized access to your account or need immediate assistance with a critical issue, contact our emergency support team.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center justify-center space-x-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors">
            <Phone className="h-4 w-4" />
            <span>Emergency Hotline</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors">
            <Mail className="h-4 w-4" />
            <span>Emergency Email</span>
          </button>
        </div>
      </div>

      {/* Status & Updates */}
      <div className="gradient-card border border-slate-600 rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">System Status</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm text-green-400">All Systems Operational</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span className="text-slate-300">API Services</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span className="text-slate-300">Payment Processing</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span className="text-slate-300">Customer Support</span>
          </div>
        </div>
        <button className="mt-4 text-blue-400 text-sm hover:text-blue-300 transition-colors">
          View detailed status page →
        </button>
      </div>
    </div>
  );
}
