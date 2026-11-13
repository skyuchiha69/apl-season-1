import React, { createContext, useContext, useState, useEffect } from 'react';
import { TeamId } from '../../data/types';

type ActiveTheme = 'neutral' | TeamId;

interface ThemeContextType {
  currentTheme: ActiveTheme;
  setTheme: (theme: ActiveTheme) => void;
  resetTheme: () => void;
}

const defaultContext: ThemeContextType = {
  currentTheme: 'neutral',
  setTheme: () => {},
  resetTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ActiveTheme>('neutral');

  useEffect(() => {
    const root = document.documentElement;
    if (currentTheme === 'neutral') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', currentTheme);
    }
  }, [currentTheme]);

  const resetTheme = () => setCurrentTheme('neutral');

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  return context || defaultContext;
}

