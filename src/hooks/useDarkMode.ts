import { createContext, createElement, useContext, useEffect, useState, type ReactNode } from 'react';

const STORAGE_KEY = 'cn-portfolio-theme';

interface DarkModeContextValue {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const DarkModeContext = createContext<DarkModeContextValue | undefined>(undefined);

export function DarkModeProvider({
  children,
  defaultDark = true,
}: {
  children: ReactNode;
  defaultDark?: boolean;
}) {
  const [isDarkMode, setIsDarkMode] = useState(defaultDark);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    const initialDark = storedTheme ? storedTheme === 'dark' : defaultDark;
    setIsDarkMode(initialDark);
  }, [defaultDark]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.documentElement.classList.toggle('dark', isDarkMode);
    window.localStorage.setItem(STORAGE_KEY, isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return createElement(
    DarkModeContext.Provider,
    { value: { isDarkMode, setIsDarkMode } },
    children,
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
}
