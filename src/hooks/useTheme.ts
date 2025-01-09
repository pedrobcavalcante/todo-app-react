import { useEffect, useState } from 'react';
import {
  getLocalStorage,
  setLocalStorage,
} from '../data/datasource/localStorage';

export const useTheme = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const savedTheme = getLocalStorage<string>('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    setLocalStorage('theme', newTheme);
  };

  return { theme, toggleTheme };
};
