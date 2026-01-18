'use client';

import { useState, useEffect } from 'react';
import {
  Bell,
  Check,
  X,
  Filter,
  Search,
  MoreVertical,
  Settings,
  Trash2,
  Archive,
  Star,
  AlertTriangle,
  Info,
  CheckCircle,
  Clock,
  DollarSign,
  Shield,
  User,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  ArrowLeftRight,
  RefreshCw,
  Download,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Smartphone,
  Mail,
  Globe,
  Zap,
  Calendar,
  Hash,
  Tag,
  ChevronDown,
  ChevronUp,
  Plus,
  Edit,
  Save,
  XCircle,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Monitor,
  MessageCircle
} from 'lucide-react';

// Mock notification data
const mockNotifications = [
  {
    id: 'n1',
    type: 'transaction',
    priority: 'high',
    title: 'Large Transaction Completed',
    message: 'Your transfer of $25,000 to Acme Corp Bank has been successfully completed.',
    timestamp: '2025-01-15T14:30:00Z',
    read: false,
    category: 'payments',
    action: 'view_transaction',
    metadata: {
      amount: 25000,
      currency: 'USD',
      recipient: 'Acme Corp Bank',
      transactionId: 'TXN-2025-001'
    }
  },
  {
    id: 'n2',
    type: 'security',
    priority: 'critical',
    title: 'New Login Detected',
    message: 'A new device logged into your account from New York, NY at 2:15 PM.',
    timestamp: '2025-01-15T14:15:00Z',
    read: false,
    category: 'security',
    action: 'review_login',
    metadata: {
      location: 'New York, NY',
      device: 'Chrome on macOS',
      ip: '192.168.1.100'
    }
  },
  {
    id: 'n3',
    type: 'conversion',
    priority: 'medium',
    title: 'Currency Conversion Executed',
    message: 'Your conversion of 2,500.00 EUR to 12,500.00 BRL has been completed at rate 5.0 BRL/EUR.',
    timestamp: '2025-01-15T13:45:00Z',
    read: true,
    category: 'trading',
    action: 'view_conversion',
    metadata: {
      fromAmount: 2500,
      fromCurrency: 'EUR',
      toAmount: 12500,
      toCurrency: 'BRL',
      rate: 5.0
    }
  },
  {
    id: 'n4',
    type: 'system',
    priority: 'low',
    title: 'Scheduled Maintenance',
    message: 'System maintenance is scheduled for tonight from 2:00 AM to 4:00 AM EST.',
    timestamp: '2025-01-15T10:00:00Z',
    read: true,
    category: 'system',
    action: 'view_maintenance',
    metadata: {
      startTime: '2025-01-16T02:00:00Z',
      endTime: '2025-01-16T04:00:00Z',
      affectedServices: ['API', 'Web App']
    }
  },
  {
    id: 'n5',
    type: 'limit',
    priority: 'medium',
    title: 'Daily Limit Approaching',
    message: 'You have used 85% of your daily withdrawal limit ($8,500 of $10,000).',
    timestamp: '2025-01-15T09:30:00Z',
    read: false,
    category: 'limits',
    action: 'view_limits',
    metadata: {
      used: 8500,
      limit: 10000,
      currency: 'USD',
      type: 'withdrawal'
    }
  },
  {
    id: 'n6',
    type: 'team',
    priority: 'low',
    title: 'Team Member Added',
    message: 'Sarah Johnson has been added to your team with Viewer permissions.',
    timestamp: '2025-01-14T16:20:00Z',
    read: true,
    category: 'team',
    action: 'view_team',
    metadata: {
      memberName: 'Sarah Johnson',
      role: 'Viewer',
      addedBy: 'John Doe'
    }
  },
  {
    id: 'n7',
    type: 'compliance',
    priority: 'high',
    title: 'KYC Verification Required',
    message: 'Additional documentation is required to complete your KYC verification.',
    timestamp: '2025-01-14T14:00:00Z',
    read: false,
    category: 'compliance',
    action: 'complete_kyc',
    metadata: {
      requiredDocs: ['Proof of Address', 'Bank Statement'],
      deadline: '2025-01-21T14:00:00Z'
    }
  },
  {
    id: 'n8',
    type: 'market',
    priority: 'low',
    title: 'Exchange Rate Alert',
    message: 'EUR to BRL has reached your target rate of 5.0.',
    timestamp: '2025-01-14T11:15:00Z',
    read: true,
    category: 'market',
    action: 'view_market',
    metadata: {
      currency: 'EUR',
      targetRate: 5.0,
      currentRate: 5.05
    }
  }
];

// Notification type configurations
const notificationTypes = {
  transaction: { icon: DollarSign, color: 'text-green-400', bgColor: 'bg-green-500/20' },
  security: { icon: Shield, color: 'text-red-400', bgColor: 'bg-red-500/20' },
  conversion: { icon: ArrowLeftRight, color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
  system: { icon: Settings, color: 'text-slate-400', bgColor: 'bg-slate-500/20' },
  limit: { icon: AlertTriangle, color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
  team: { icon: User, color: 'text-purple-400', bgColor: 'bg-purple-500/20' },
  compliance: { icon: CheckCircle, color: 'text-yellow-400', bgColor: 'bg-yellow-500/20' },
  market: { icon: TrendingUp, color: 'text-cyan-400', bgColor: 'bg-cyan-500/20' }
};

// Priority configurations
const priorityConfig = {
  critical: { color: 'text-red-400', bgColor: 'bg-red-500/20', borderColor: 'border-red-500/30' },
  high: { color: 'text-orange-400', bgColor: 'bg-orange-500/20', borderColor: 'border-orange-500/30' },
  medium: { color: 'text-blue-400', bgColor: 'bg-blue-500/20', borderColor: 'border-blue-500/30' },
  low: { color: 'text-slate-400', bgColor: 'bg-slate-500/20', borderColor: 'border-slate-500/30' }
};

export function Notifications() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    push: true,
    sms: false,
    desktop: true,
    sound: true,
    categories: {
      payments: true,
      security: true,
      trading: true,
      system: false,
      limits: true,
      team: true,
      compliance: true,
      market: false
    }
  });

  // Filter notifications based on current filter and search
  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = filter === 'all' || 
      (filter === 'unread' && !notification.read) ||
      (filter === 'read' && notification.read) ||
      notification.category === filter ||
      notification.priority === filter;
    
    const matchesSearch = searchQuery === '' ||
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  // Get unread count
  const unreadCount = notifications.filter(n => !n.read).length;

  // Mark notification as read
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  // Mark notification as unread
  const markAsUnread = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: false } : n)
    );
  };

  // Delete notification
  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  // Clear all read notifications
  const clearReadNotifications = () => {
    setNotifications(prev => prev.filter(n => !n.read));
  };

  // Toggle notification selection
  const toggleSelection = (id: string) => {
    setSelectedNotifications(prev => 
      prev.includes(id) 
        ? prev.filter(nId => nId !== id)
        : [...prev, id]
    );
  };

  // Bulk actions
  const bulkMarkAsRead = () => {
    setNotifications(prev => 
      prev.map(n => selectedNotifications.includes(n.id) ? { ...n, read: true } : n)
    );
    setSelectedNotifications([]);
  };

  const bulkDelete = () => {
    setNotifications(prev => prev.filter(n => !selectedNotifications.includes(n.id)));
    setSelectedNotifications([]);
  };

  // Format timestamp
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInHours * 60);
      return `${diffInMinutes}m ago`;
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  // Get notification icon and styling
  const getNotificationStyle = (notification: typeof mockNotifications[0]) => {
    const typeConfig = notificationTypes[notification.type as keyof typeof notificationTypes];
    const priorityStyle = priorityConfig[notification.priority as keyof typeof priorityConfig];
    
    return {
      icon: typeConfig?.icon || Info,
      iconColor: typeConfig?.color || 'text-slate-400',
      iconBg: typeConfig?.bgColor || 'bg-slate-500/20',
      priorityColor: priorityStyle?.color || 'text-slate-400',
      priorityBg: priorityStyle?.bgColor || 'bg-slate-500/20',
      borderColor: priorityStyle?.borderColor || 'border-slate-500/30'
    };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Notifications</h1>
          <p className="text-sm text-slate-300 mt-2">
            Stay updated with your account activity and important alerts.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-slate-400" />
            <span className="text-sm text-slate-300">
              {unreadCount} unread
            </span>
          </div>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Notification Settings Panel */}
      {showSettings && (
        <div className="gradient-card border border-slate-600 rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-4">Notification Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-slate-300 mb-3">Delivery Methods</h4>
              <div className="space-y-3">
                {[
                  { key: 'email', label: 'Email', icon: Mail },
                  { key: 'push', label: 'Push Notifications', icon: Smartphone },
                  { key: 'sms', label: 'SMS', icon: MessageCircle },
                  { key: 'desktop', label: 'Desktop', icon: Monitor },
                  { key: 'sound', label: 'Sound', icon: Volume2 }
                ].map(({ key, label, icon: Icon }) => (
                  <label key={key} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notificationSettings[key as keyof typeof notificationSettings] as boolean}
                      onChange={(e) => setNotificationSettings(prev => ({
                        ...prev,
                        [key]: e.target.checked
                      }))}
                      className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                    />
                    <Icon className="h-4 w-4 text-slate-400" />
                    <span className="text-sm text-slate-300">{label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-300 mb-3">Categories</h4>
              <div className="space-y-3">
                {Object.entries(notificationSettings.categories).map(([category, enabled]) => (
                  <label key={category} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={enabled}
                      onChange={(e) => setNotificationSettings(prev => ({
                        ...prev,
                        categories: {
                          ...prev.categories,
                          [category]: e.target.checked
                        }
                      }))}
                      className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-slate-300 capitalize">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search notifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          {['all', 'unread', 'read', 'payments', 'security', 'trading', 'system'].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                filter === filterOption
                  ? 'gradient-primary text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedNotifications.length > 0 && (
        <div className="gradient-card border border-slate-600 rounded-lg p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-300">
              {selectedNotifications.length} notification{selectedNotifications.length > 1 ? 's' : ''} selected
            </span>
            <div className="flex space-x-2">
              <button
                onClick={bulkMarkAsRead}
                className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/30 transition-colors"
              >
                Mark as Read
              </button>
              <button
                onClick={bulkDelete}
                className="px-3 py-1 text-sm bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={markAllAsRead}
          className="px-3 py-2 text-sm bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors"
        >
          Mark All as Read
        </button>
        <button
          onClick={clearReadNotifications}
          className="px-3 py-2 text-sm bg-orange-500/20 text-orange-400 rounded-lg hover:bg-orange-500/30 transition-colors"
        >
          Clear Read
        </button>
        <button className="px-3 py-2 text-sm bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
          <Download className="h-4 w-4 inline mr-1" />
          Export
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="gradient-card border border-slate-600 rounded-lg p-8 shadow-lg text-center">
            <Bell className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No notifications found</h3>
            <p className="text-slate-400">
              {searchQuery ? 'Try adjusting your search terms' : 'You\'re all caught up!'}
            </p>
          </div>
        ) : (
          filteredNotifications.map((notification) => {
            const style = getNotificationStyle(notification);
            const IconComponent = style.icon;
            
            return (
              <div
                key={notification.id}
                className={`gradient-card border rounded-lg p-4 shadow-lg transition-all hover:shadow-xl ${
                  notification.read 
                    ? 'border-slate-600 bg-slate-800/30' 
                    : `${style.borderColor} bg-slate-800/50`
                }`}
              >
                <div className="flex items-start space-x-4">
                  {/* Selection Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedNotifications.includes(notification.id)}
                    onChange={() => toggleSelection(notification.id)}
                    className="mt-1 w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                  />
                  
                  {/* Notification Icon */}
                  <div className={`p-2 rounded-lg ${style.iconBg}`}>
                    <IconComponent className={`h-5 w-5 ${style.iconColor}`} />
                  </div>
                  
                  {/* Notification Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className={`text-sm font-semibold ${notification.read ? 'text-slate-300' : 'text-white'}`}>
                            {notification.title}
                          </h3>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          )}
                          <span className={`px-2 py-1 text-xs rounded-full ${style.priorityBg} ${style.priorityColor}`}>
                            {notification.priority}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 mb-2">
                          {notification.message}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-slate-500">
                          <span>{formatTimestamp(notification.timestamp)}</span>
                          <span className="capitalize">{notification.category}</span>
                          {notification.metadata && (
                            <span className="capitalize">{notification.type}</span>
                          )}
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center space-x-2 ml-4">
                        {!notification.read ? (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="p-1 text-slate-400 hover:text-green-400 transition-colors"
                            title="Mark as read"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() => markAsUnread(notification.id)}
                            className="p-1 text-slate-400 hover:text-blue-400 transition-colors"
                            title="Mark as unread"
                          >
                            <EyeOff className="h-4 w-4" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="p-1 text-slate-400 hover:text-red-400 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-slate-400 hover:text-slate-300 transition-colors">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Load More */}
      {filteredNotifications.length > 0 && (
        <div className="text-center">
          <button className="px-6 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity">
            Load More Notifications
          </button>
        </div>
      )}
    </div>
  );
}
