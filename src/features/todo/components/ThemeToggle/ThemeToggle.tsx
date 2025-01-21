import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './ThemeToggle.module.scss';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.button}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <img
          src="/icons/icon-sun.svg"
          alt="Light Theme"
          className={styles.icon}
        />
      ) : (
        <img
          src="/icons/icon-moon.svg"
          alt="Dark Theme"
          className={styles.icon}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
