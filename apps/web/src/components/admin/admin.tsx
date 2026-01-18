'use client';

import { useState } from 'react';
import {
  Shield,
  Users,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Globe,
  Server,
  Database,
  Key,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  RefreshCw,
  Settings,
  Bell,
  Lock,
  Unlock,
  UserCheck,
  UserX,
  Ban,
  Check,
  X,
  MoreHorizontal,
  ChevronDown,
  ChevronRight,
  BarChart3,
  PieChart,
  LineChart,
  Zap,
  Cpu,
  HardDrive,
  Wifi,
  AlertCircle,
  Info,
  ExternalLink,
  Copy,
  FileText,
  Calendar,
  MapPin,
  Building,
  Smartphone,
  Mail,
  Phone,
  CreditCard,
  Wallet,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

// Mock data for system metrics
const mockSystemMetrics = [
  {
    title: 'Total Users',
    value: '12,847',
    change: '+8.2%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-400'
  },
  {
    title: 'Active Sessions',
    value: '3,421',
    change: '+12.5%',
    trend: 'up',
    icon: Activity,
    color: 'text-green-400'
  },
  {
    title: 'System Uptime',
    value: '99.98%',
    change: '+0.01%',
    trend: 'up',
    icon: Server,
    color: 'text-purple-400'
  },
  {
    title: 'Security Score',
    value: '98.5',
    change: '+2.1%',
    trend: 'up',
    icon: Shield,
    color: 'text-yellow-400'
  }
];

// Mock data for recent activities
const mockRecentActivities = [
  {
    id: '1',
    type: 'user_login',
    user: 'john.doe@example.com',
    action: 'Logged in',
    timestamp: '2024-10-28T15:30:00Z',
    status: 'success',
    ip: '192.168.1.100',
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    type: 'transaction',
    user: 'maria.garcia@example.com',
    action: 'Large transaction processed',
    timestamp: '2024-10-28T15:25:00Z',
    status: 'warning',
    ip: '10.0.0.50',
    location: 'Madrid, Spain'
  },
  {
    id: '3',
    type: 'security',
    user: 'admin@vaxen.global',
    action: 'Security policy updated',
    timestamp: '2024-10-28T15:20:00Z',
    status: 'info',
    ip: '172.16.0.10',
    location: 'New York, NY'
  },
  {
    id: '4',
    type: 'system',
    user: 'system',
    action: 'Database backup completed',
    timestamp: '2024-10-28T15:15:00Z',
    status: 'success',
    ip: '127.0.0.1',
    location: 'Local'
  },
  {
    id: '5',
    type: 'security',
    user: 'suspicious.user@example.com',
    action: 'Failed login attempt',
    timestamp: '2024-10-28T15:10:00Z',
    status: 'error',
    ip: '203.0.113.1',
    location: 'Unknown'
  }
];

// Mock data for user management
const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2024-10-28T15:30:00Z',
    createdAt: '2024-01-15T10:00:00Z',
    loginCount: 1247,
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria.garcia@example.com',
    role: 'user',
    status: 'active',
    lastLogin: '2024-10-28T14:45:00Z',
    createdAt: '2024-02-20T09:30:00Z',
    loginCount: 892,
    location: 'Madrid, Spain'
  },
  {
    id: '3',
    name: 'David Chen',
    email: 'david.chen@example.com',
    role: 'manager',
    status: 'suspended',
    lastLogin: '2024-10-25T11:20:00Z',
    createdAt: '2024-03-10T14:15:00Z',
    loginCount: 456,
    location: 'London, UK'
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    role: 'user',
    status: 'pending',
    lastLogin: null,
    createdAt: '2024-10-28T12:00:00Z',
    loginCount: 0,
    location: 'Toronto, Canada'
  }
];

// Mock data for system health
const mockSystemHealth = [
  { service: 'API Gateway', status: 'healthy', uptime: '99.99%', responseTime: '45ms' },
  { service: 'Database', status: 'healthy', uptime: '99.98%', responseTime: '12ms' },
  { service: 'Redis Cache', status: 'healthy', uptime: '99.97%', responseTime: '2ms' },
  { service: 'File Storage', status: 'warning', uptime: '99.85%', responseTime: '120ms' },
  { service: 'Email Service', status: 'healthy', uptime: '99.95%', responseTime: '85ms' },
  { service: 'SMS Gateway', status: 'error', uptime: '98.50%', responseTime: '500ms' }
];

export function Admin() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
      case 'active':
      case 'healthy':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'warning':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'error':
      case 'suspended':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'info':
      case 'pending':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
      case 'active':
      case 'healthy':
        return <CheckCircle className="h-3 w-3" />;
      case 'warning':
        return <AlertTriangle className="h-3 w-3" />;
      case 'error':
      case 'suspended':
        return <XCircle className="h-3 w-3" />;
      case 'info':
      case 'pending':
        return <Clock className="h-3 w-3" />;
      default:
        return <AlertCircle className="h-3 w-3" />;
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

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'users', name: 'User Management', icon: Users },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'system', name: 'System Health', icon: Server },
    { id: 'logs', name: 'Activity Logs', icon: FileText }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-sm text-slate-300 mt-1">
            System administration and platform management
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </button>
          <button className="flex items-center px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-all">
            <Settings className="h-4 w-4 mr-2" />
            System Settings
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-lg w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              activeTab === tab.id
                ? 'gradient-primary text-white shadow-lg'
                : 'text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
          >
            <tab.icon className="h-4 w-4 inline mr-2" />
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content based on active tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* System Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockSystemMetrics.map((metric, index) => (
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

          {/* Recent Activities */}
          <div className="gradient-card border border-slate-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Recent Activities</h3>
            <div className="space-y-3">
              {mockRecentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${getStatusColor(activity.status)}`}>
                      {getStatusIcon(activity.status)}
                    </div>
                    <div>
                      <div className="text-white font-medium">{activity.action}</div>
                      <div className="text-sm text-slate-400">
                        {activity.user} • {activity.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-300">{formatDate(activity.timestamp)}</div>
                    <div className="text-xs text-slate-400">{activity.ip}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="space-y-6">
          {/* User Management Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">User Management</h3>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
                <option value="pending">Pending</option>
              </select>
              <button className="flex items-center px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-all">
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </button>
            </div>
          </div>

          {/* Users Table */}
          <div className="gradient-card border border-slate-600 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="gradient-primary">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">User</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Role</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Last Login</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Login Count</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-white">{user.name}</div>
                          <div className="text-xs text-slate-400">{user.email}</div>
                          <div className="text-xs text-slate-500">{user.location}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.role === 'admin' ? 'bg-purple-100 text-purple-800' :
                          user.role === 'manager' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(user.status)}`}>
                          {getStatusIcon(user.status)}
                          <span className="ml-1 capitalize">{user.status}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">
                        {user.lastLogin ? formatDate(user.lastLogin) : 'Never'}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">
                        {user.loginCount.toLocaleString()}
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

      {activeTab === 'security' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Security Overview */}
            <div className="gradient-card border border-slate-600 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Security Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-white">Two-Factor Authentication</span>
                  </div>
                  <span className="text-green-400 text-sm">98.5% enabled</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Lock className="h-5 w-5 text-blue-400" />
                    <span className="text-white">Password Policy</span>
                  </div>
                  <span className="text-green-400 text-sm">Strong</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-orange-400" />
                    <span className="text-white">Failed Login Attempts</span>
                  </div>
                  <span className="text-orange-400 text-sm">23 today</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Ban className="h-5 w-5 text-red-400" />
                    <span className="text-white">Blocked IPs</span>
                  </div>
                  <span className="text-red-400 text-sm">5 active</span>
                </div>
              </div>
            </div>

            {/* Security Actions */}
            <div className="gradient-card border border-slate-600 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Security Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-colors">
                  <div className="flex items-center space-x-3">
                    <UserCheck className="h-5 w-5 text-green-400" />
                    <span className="text-white">Approve Pending Users</span>
                  </div>
                  <span className="text-slate-400 text-sm">3 pending</span>
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-colors">
                  <div className="flex items-center space-x-3">
                    <UserX className="h-5 w-5 text-red-400" />
                    <span className="text-white">Suspend Users</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Ban className="h-5 w-5 text-orange-400" />
                    <span className="text-white">Block IP Addresses</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Key className="h-5 w-5 text-blue-400" />
                    <span className="text-white">Reset User Passwords</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'system' && (
        <div className="space-y-6">
          <div className="gradient-card border border-slate-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-6">System Health</h3>
            <div className="space-y-3">
              {mockSystemHealth.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${getStatusColor(service.status)}`}>
                      {getStatusIcon(service.status)}
                    </div>
                    <div>
                      <div className="text-white font-medium">{service.service}</div>
                      <div className="text-sm text-slate-400">Uptime: {service.uptime}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-300">{service.responseTime}</div>
                    <div className="text-xs text-slate-400">Response Time</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="gradient-card border border-slate-600 rounded-lg p-6">
              <h4 className="text-md font-semibold text-white mb-4">Server Resources</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">CPU Usage</span>
                    <span className="text-white">45%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">Memory Usage</span>
                    <span className="text-white">67%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">Disk Usage</span>
                    <span className="text-white">23%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-card border border-slate-600 rounded-lg p-6">
              <h4 className="text-md font-semibold text-white mb-4">Database Status</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">Connections</span>
                  <span className="text-white">45/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Query Time</span>
                  <span className="text-white">12ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Cache Hit Rate</span>
                  <span className="text-white">94.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Last Backup</span>
                  <span className="text-white">2h ago</span>
                </div>
              </div>
            </div>

            <div className="gradient-card border border-slate-600 rounded-lg p-6">
              <h4 className="text-md font-semibold text-white mb-4">Network Status</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">Bandwidth</span>
                  <span className="text-white">1.2 Gbps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Latency</span>
                  <span className="text-white">8ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Packet Loss</span>
                  <span className="text-white">0.01%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">SSL Status</span>
                  <span className="text-green-400">Valid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'logs' && (
        <div className="space-y-6">
          <div className="gradient-card border border-slate-600 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Activity Logs</h3>
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
            <div className="space-y-3">
              {mockRecentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${getStatusColor(activity.status)}`}>
                      {getStatusIcon(activity.status)}
                    </div>
                    <div>
                      <div className="text-white font-medium">{activity.action}</div>
                      <div className="text-sm text-slate-400">
                        {activity.user} • {activity.type} • {activity.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-300">{formatDate(activity.timestamp)}</div>
                    <div className="text-xs text-slate-400">{activity.ip}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}