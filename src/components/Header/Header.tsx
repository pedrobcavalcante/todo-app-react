import React from 'react';
import styles from './Header.module.css';
import SunIcon from '../../assets/icons/icon-sun.svg';
import MoonIcon from '../../assets/icons/icon-moon.svg';
import { useTheme } from '../../hooks/useTheme';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TODO</h1>
      {/* <button className={styles.themeToggleButton} onClick={toggleTheme}>
        <img
          src={theme === 'light' ? MoonIcon : SunIcon}
          alt={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          className={styles.themeIcon}
        />
      </button> */}
    </header>
  );
};

export default Header;
