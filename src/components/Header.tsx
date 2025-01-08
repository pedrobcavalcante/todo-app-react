import React from 'react';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <header
      className="flex justify-between items-center p-4 text-white"
      style={{
        background: 'linear-gradient(to right, #57b7ff, #3a4dff)',
      }}
    >
      <h1 className="text-3xl font-bold tracking-widest">TODO</h1>
      <button
        onClick={toggleTheme}
        className="text-2xl focus:outline-none"
        aria-label="Toggle Theme"
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>
    </header>
  );
};

export default Header;
