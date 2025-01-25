import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './ThemeToggle.module.scss';
import ENV from '../../../../config/env';

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
          src={`${ENV.BASE_PATH}/icons/icon-sun.svg`}
          alt="Light Theme"
          className={styles.icon}
        />
      ) : (
        <img
          src={`${ENV.BASE_PATH}/icons/icon-moon.svg`}
          alt="Dark Theme"
          className={styles.icon}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
