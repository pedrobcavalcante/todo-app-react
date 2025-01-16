import React, { useState, useRef, useEffect } from 'react';
import styles from './ListHeader.module.scss';

interface ListHeaderProps {
  onSearch: (query: string) => void;
}

const ListHeader: React.FC<ListHeaderProps> = ({ onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target as Node)
    ) {
      setIsSearchOpen(false);
      setSearchText('');
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      onSearch(searchText.trim());
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TODO</h1>
      <div className={styles.searchContainer} ref={searchContainerRef}>
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
        {isSearchOpen && (
          <input
            type="text"
            placeholder="Search tasks..."
            className={`${styles.searchInput} ${
              isSearchOpen ? styles.searchInputOpen : ''
            }`}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        )}
      </div>
    </header>
  );
};

export default ListHeader;
