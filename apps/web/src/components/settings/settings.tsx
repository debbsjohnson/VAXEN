'use client';

import { useState } from 'react';
import {
  User,
  Shield,
  Bell,
  Globe,
  CreditCard,
  Key,
  Smartphone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Save,
  Edit,
  Trash2,
  Plus,
  Check,
  X,
  AlertTriangle,
  CheckCircle,
  Clock,
  Download,
  Upload,
  Settings as SettingsIcon,
  Palette,
  Moon,
  Sun,
  Monitor,
  Languages,
  DollarSign,
  Calendar,
  MapPin,
  Phone,
  Building,
  ChevronDown,
  ChevronRight,
  QrCode,
  Copy,
  RefreshCw,
  FileText
} from 'lucide-react';

export function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Form states
  const [profile, setProfile] = useState({
    firstName: 'Tobiloba',
    lastName: 'Asu-Johnson',
    email: 'tobi@vaxen.global',
    phone: '+1 (555) 123-4567',
    company: 'Vaxen Finance',
    position: 'CEO',
    timezone: 'UTC-8',
    language: 'en',
    currency: 'USD',
    country: 'United States'
  });

  const [security, setSecurity] = useState({
    twoFactorEnabled: true,
    emailNotifications: true,
    smsNotifications: false,
    loginAlerts: true,
    transactionAlerts: true,
    weeklyReports: true,
    marketingEmails: false
  });

  const [preferences, setPreferences] = useState({
    theme: 'dark',
    dashboardLayout: 'default',
    defaultCurrency: 'USD',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    autoLogout: 30,
    sessionTimeout: 60
  });

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

  const toggleSecuritySetting = (setting: keyof typeof security) => {
    setSecurity(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const togglePreferenceSetting = (setting: keyof typeof preferences, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'preferences', name: 'Preferences', icon: SettingsIcon },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'api', name: 'API Keys', icon: Key }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="text-sm text-slate-300 mt-1">
            Manage your account settings, security preferences, and notifications
          </p>
        </div>
        <div className="flex items-center space-x-3">
          {isEditing && (
            <>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 disabled:opacity-50 transition-all"
              >
                {isSaving ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </button>
            </>
          )}
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-all"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="gradient-card border border-slate-600 rounded-lg p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'gradient-primary text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="gradient-card border border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                    <input
                      type="text"
                      value={profile.firstName}
                      onChange={(e) => setProfile(prev => ({ ...prev, firstName: e.target.value }))}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={profile.lastName}
                      onChange={(e) => setProfile(prev => ({ ...prev, lastName: e.target.value }))}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                    <input
                      type="text"
                      value={profile.company}
                      onChange={(e) => setProfile(prev => ({ ...prev, company: e.target.value }))}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Position</label>
                    <input
                      type="text"
                      value={profile.position}
                      onChange={(e) => setProfile(prev => ({ ...prev, position: e.target.value }))}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>

              <div className="gradient-card border border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Regional Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Country</label>
                    <select
                      value={profile.country}
                      onChange={(e) => setProfile(prev => ({ ...prev, country: e.target.value }))}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    >
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Timezone</label>
                    <select
                      value={profile.timezone}
                      onChange={(e) => setProfile(prev => ({ ...prev, timezone: e.target.value }))}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    >
                      <option value="UTC-8">Pacific Time (UTC-8)</option>
                      <option value="UTC-5">Eastern Time (UTC-5)</option>
                      <option value="UTC+0">GMT (UTC+0)</option>
                      <option value="UTC+1">Central European Time (UTC+1)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Language</label>
                    <select
                      value={profile.language}
                      onChange={(e) => setProfile(prev => ({ ...prev, language: e.target.value }))}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Default Currency</label>
                    <select
                      value={profile.currency}
                      onChange={(e) => setProfile(prev => ({ ...prev, currency: e.target.value }))}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="CAD">CAD</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="gradient-card border border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Password & Authentication</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Current Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter current password"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-all">
                    Update Password
                  </button>
                </div>
              </div>

              <div className="gradient-card border border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-5 w-5 text-green-400" />
                    <div>
                      <div className="text-white font-medium">Authenticator App</div>
                      <div className="text-sm text-slate-400">Use an authenticator app for 2FA</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      security.twoFactorEnabled 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {security.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                    </span>
                    <button
                      onClick={() => toggleSecuritySetting('twoFactorEnabled')}
                      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                        security.twoFactorEnabled
                          ? 'bg-red-600 text-white hover:bg-red-700'
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      {security.twoFactorEnabled ? 'Disable' : 'Enable'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="gradient-card border border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Active Sessions</h3>
                <div className="space-y-3">
                  {[
                    { device: 'Chrome on macOS', location: 'San Francisco, CA', lastActive: '2 minutes ago', current: true },
                    { device: 'Safari on iPhone', location: 'San Francisco, CA', lastActive: '1 hour ago', current: false },
                    { device: 'Firefox on Windows', location: 'New York, NY', lastActive: '2 days ago', current: false }
                  ].map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <div>
                          <div className="text-white font-medium">{session.device}</div>
                          <div className="text-sm text-slate-400">{session.location} • {session.lastActive}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {session.current && (
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-xs">
                            Current
                          </span>
                        )}
                        <button className="text-red-400 hover:text-red-300 text-sm">
                          Revoke
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div className="gradient-card border border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Email Notifications</h3>
                <div className="space-y-4">
                  {[
                    { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email' },
                    { key: 'loginAlerts', label: 'Login Alerts', description: 'Get notified when someone logs into your account' },
                    { key: 'transactionAlerts', label: 'Transaction Alerts', description: 'Receive alerts for all transactions' },
                    { key: 'weeklyReports', label: 'Weekly Reports', description: 'Get weekly summary reports' },
                    { key: 'marketingEmails', label: 'Marketing Emails', description: 'Receive promotional emails and updates' }
                  ].map((setting) => (
                    <div key={setting.key} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                      <div>
                        <div className="text-white font-medium">{setting.label}</div>
                        <div className="text-sm text-slate-400">{setting.description}</div>
                      </div>
                      <button
                        onClick={() => toggleSecuritySetting(setting.key as keyof typeof security)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          security[setting.key as keyof typeof security] ? 'bg-blue-600' : 'bg-slate-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            security[setting.key as keyof typeof security] ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="gradient-card border border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">SMS Notifications</h3>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <div>
                    <div className="text-white font-medium">SMS Notifications</div>
                    <div className="text-sm text-slate-400">Receive critical alerts via SMS</div>
                  </div>
                  <button
                    onClick={() => toggleSecuritySetting('smsNotifications')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      security.smsNotifications ? 'bg-blue-600' : 'bg-slate-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        security.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <div className="gradient-card border border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Appearance</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Theme</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: 'light', label: 'Light', icon: Sun },
                        { value: 'dark', label: 'Dark', icon: Moon },
                        { value: 'system', label: 'System', icon: Monitor }
                      ].map((theme) => (
                        <button
                          key={theme.value}
                          onClick={() => togglePreferenceSetting('theme', theme.value)}
                          className={`p-3 rounded-lg border transition-all ${
                            preferences.theme === theme.value
                              ? 'border-blue-500 bg-blue-500/10'
                              : 'border-slate-600 bg-slate-800 hover:bg-slate-700'
                          }`}
                        >
                          <theme.icon className="h-5 w-5 text-white mb-2" />
                          <div className="text-sm text-white">{theme.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="gradient-card border border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">General Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Date Format</label>
                    <select
                      value={preferences.dateFormat}
                      onChange={(e) => togglePreferenceSetting('dateFormat', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Time Format</label>
                    <select
                      value={preferences.timeFormat}
                      onChange={(e) => togglePreferenceSetting('timeFormat', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="12h">12 Hour</option>
                      <option value="24h">24 Hour</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Auto Logout (minutes)</label>
                    <select
                      value={preferences.autoLogout}
                      onChange={(e) => togglePreferenceSetting('autoLogout', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value={15}>15 minutes</option>
                      <option value={30}>30 minutes</option>
                      <option value={60}>1 hour</option>
                      <option value={120}>2 hours</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Session Timeout (minutes)</label>
                    <select
                      value={preferences.sessionTimeout}
                      onChange={(e) => togglePreferenceSetting('sessionTimeout', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value={30}>30 minutes</option>
                      <option value={60}>1 hour</option>
                      <option value={120}>2 hours</option>
                      <option value={240}>4 hours</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <div className="gradient-card border border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Billing Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Billing Address</label>
                    <input
                      type="text"
                      placeholder="123 Main Street"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">City</label>
                    <input
                      type="text"
                      placeholder="San Francisco"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">State/Province</label>
                    <input
                      type="text"
                      placeholder="California"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">ZIP/Postal Code</label>
                    <input
                      type="text"
                      placeholder="94105"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="gradient-card border border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Payment Methods</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-5 w-5 text-blue-400" />
                      <div>
                        <div className="text-white font-medium">**** **** **** 4242</div>
                        <div className="text-sm text-slate-400">Expires 12/25</div>
                      </div>
                    </div>
                    <button className="text-red-400 hover:text-red-300 text-sm">
                      Remove
                    </button>
                  </div>
                  <button className="w-full p-4 border-2 border-dashed border-slate-600 rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-colors">
                    <Plus className="h-5 w-5 mx-auto mb-2" />
                    Add Payment Method
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* API Keys Tab */}
          {activeTab === 'api' && (
            <div className="space-y-6">
              <div className="gradient-card border border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">API Keys</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-white font-medium">Production API Key</div>
                        <div className="text-sm text-slate-400">Created 2 months ago</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-slate-400 hover:text-white">
                          <Copy className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-slate-400 hover:text-white">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-red-400 hover:text-red-300">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type={showApiKey ? 'text' : 'password'}
                        value="sk_live_51H1234567890abcdef..."
                        readOnly
                        className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm"
                      />
                      <button
                        onClick={() => setShowApiKey(!showApiKey)}
                        className="p-2 text-slate-400 hover:text-white"
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <button className="flex items-center px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-all">
                    <Plus className="h-4 w-4 mr-2" />
                    Generate New API Key
                  </button>
                </div>
              </div>

              <div className="gradient-card border border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">API Documentation</h3>
                <div className="space-y-3">
                  <a href="#" className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-colors">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-blue-400" />
                      <span className="text-white">API Reference</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-colors">
                    <div className="flex items-center space-x-3">
                      <QrCode className="h-5 w-5 text-green-400" />
                      <span className="text-white">Webhook Setup</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Download className="h-5 w-5 text-purple-400" />
                      <span className="text-white">SDK Downloads</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}