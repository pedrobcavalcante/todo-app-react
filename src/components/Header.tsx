function Header() {
  const toggleTheme = () => {
    const currentTheme = document.body.className;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header style={{ padding: '10px', textAlign: 'center' }}>
      <h1>Todo App</h1>
      <button
        onClick={toggleTheme}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        Toggle Theme
      </button>
    </header>
  );
}

export default Header;
