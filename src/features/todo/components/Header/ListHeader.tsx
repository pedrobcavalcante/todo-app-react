import React, { useState } from 'react';
import styles from './ListHeader.module.scss';

const ListHeader: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TODO</h1>
      <div className={styles.searchContainer}>
        <button
          className={`${styles.searchButton} ${
            isSearchOpen ? styles.searchOpen : ''
          }`}
          onClick={toggleSearch}
        >
          <img
            src="/icons/icon-search.svg"
            alt="Search"
            className={styles.searchIcon}
          />
        </button>
        <input
          type="text"
          placeholder="Search tasks..."
          className={`${styles.searchInput} ${
            isSearchOpen ? styles.searchInputOpen : ''
          }`}
        />
      </div>
    </header>
  );
};

export default ListHeader;
