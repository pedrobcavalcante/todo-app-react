import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Todo App</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
