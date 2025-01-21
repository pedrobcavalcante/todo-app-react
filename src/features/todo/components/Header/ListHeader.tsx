import React, { useState } from 'react';
import styles from './ListHeader.module.scss';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
interface ListHeaderProps {
  onSearch: (query: string) => void;
  onClearSearch: () => void;
}

const ListHeader: React.FC<ListHeaderProps> = ({ onSearch, onClearSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (searchText.trim()) {
      onSearch(searchText.trim());
      setIsSearching(true);
    }
  };

  const handleClearSearch = () => {
    setSearchText('');
    setIsSearching(false);
    onClearSearch();
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TODO</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchText}
          className={styles.searchInput}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className={styles.searchButton}
          onClick={handleSearch}
          disabled={!searchText.trim()}
        >
          Search
        </button>
        <button
          className={styles.clearButton}
          onClick={handleClearSearch}
          disabled={!isSearching}
        >
          Clear Search
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default ListHeader;
