'use client';

import { useState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';

interface RequestAccessFormProps {
  onSuccess?: () => void;
}

export function RequestAccessForm({ onSuccess }: RequestAccessFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    country: '',
    markets: [] as string[],
    annualVolume: '',
    useCase: '',
    website: '',
    notes: '',
    honeypot: '', // Spam prevention
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const roles = [
    'CEO',
    'CFO',
    'Treasurer',
    'Finance Director',
    'Property Manager',
    'Investment Manager',
    'Other',
  ];

  const countries = [
    'United Kingdom',
    'United States',
    'Germany',
    'France',
    'Spain',
    'Portugal',
    'Brazil',
    'South Africa',
    'Other',
  ];

  const markets = [
    'Europe',
    'South America',
    'Africa',
    'Other',
  ];

  const annualVolumeRanges = [
    { value: '<250k', label: '< £250k (likely not fit)' },
    { value: '250k-1m', label: '£250k–£1m' },
    { value: '1m-5m', label: '£1m–£5m' },
    { value: '5m-20m', label: '£5m–£20m' },
    { value: '20m+', label: '£20m+' },
  ];

  const useCases = [
    'Property acquisition treasury',
    'Cross-border settlement for completions',
    'FX timing / conversion management',
    'Multi-country operating expenses',
    'Other',
  ];

  const handleMarketChange = (market: string) => {
    setFormData((prev) => ({
      ...prev,
      markets: prev.markets.includes(market)
        ? prev.markets.filter((m) => m !== market)
        : [...prev.markets, market],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Honeypot check
    if (formData.honeypot) {
      return; // Silent fail for bots
    }

    // Validation
    if (!formData.name || !formData.company || !formData.email || !formData.role) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!formData.markets.length) {
      setError('Please select at least one primary market.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/request-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit request');
      }

      setIsSuccess(true);
      
      // Track analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit_success', {
          event_category: 'lead_generation',
        });
      }

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          company: '',
          role: '',
          email: '',
          country: '',
          markets: [],
          annualVolume: '',
          useCase: '',
          website: '',
          notes: '',
          honeypot: '',
        });
        if (onSuccess) {
          onSuccess();
        }
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      
      // Track analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit_error', {
          event_category: 'lead_generation',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Request Received
        </h3>
        <p className="text-muted-foreground">
          We've received your request. If it's a fit, we'll reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        />
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        />
      </div>

      {/* Role */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Role / Title <span className="text-red-500">*</span>
        </label>
        <select
          required
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <option value="">Select role</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        />
      </div>

      {/* Country */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Country of Operation
        </label>
        <select
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          className="w-full px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <option value="">Select country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {/* Primary Markets */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Primary Markets <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {markets.map((market) => (
            <label key={market} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.markets.includes(market)}
                onChange={() => handleMarketChange(market)}
                className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
              />
              <span className="text-foreground">{market}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Annual Volume */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Estimated Annual Cross-Border Volume
        </label>
        <select
          value={formData.annualVolume}
          onChange={(e) => setFormData({ ...formData, annualVolume: e.target.value })}
          className="w-full px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <option value="">Select range</option>
          {annualVolumeRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Use Case */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Primary Use Case
        </label>
        <select
          value={formData.useCase}
          onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
          className="w-full px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <option value="">Select use case</option>
          {useCases.map((useCase) => (
            <option key={useCase} value={useCase}>
              {useCase}
            </option>
          ))}
        </select>
      </div>

      {/* Website */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Website (optional)
        </label>
        <input
          type="url"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          className="w-full px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
          placeholder="https://example.com"
        />
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Message / Notes (optional)
        </label>
        <textarea
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
          placeholder="Tell us more about your needs..."
        />
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Request'
        )}
      </button>
    </form>
  );
}

