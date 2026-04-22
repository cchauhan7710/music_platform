import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('vf-theme');
    return stored ? stored === 'dark' : true; // default dark
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('vf-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
