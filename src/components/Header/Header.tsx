import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
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
