'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('vaxen-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('vaxen-theme', theme);
    
    // Apply theme to document using both data attribute and class
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.className = theme;
    
    // Debug logging
    console.log('Theme changed to:', theme);
    console.log('Document data-theme:', document.documentElement.getAttribute('data-theme'));
    console.log('Document className:', document.documentElement.className);
    console.log('Document element:', document.documentElement);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      console.log('Toggling theme from', prev, 'to', newTheme);
      // alert(`Theme toggled to: ${newTheme}`);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return a fallback theme context if not within provider
    return {
      theme: 'dark' as Theme,
      toggleTheme: () => {
        console.warn('Theme toggle called outside of ThemeProvider');
      }
    };
  }
  return context;
}
