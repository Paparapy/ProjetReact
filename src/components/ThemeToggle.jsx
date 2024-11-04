import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.theme || 'light');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-900 rounded-lg dark:bg-gray-700 dark:text-gray-100"
    >
      {theme === 'light' ? 'Passer au mode sombre' : 'Passer au mode clair'}
    </button>
  );
};

export default ThemeToggle;
