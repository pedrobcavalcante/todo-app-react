import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './ThemeToggle.module.css';

const ThemeToggle: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.button}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
