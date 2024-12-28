import React from 'react';

function ThemeToggleButton({ toggleTheme, theme }) {
  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
}

export default ThemeToggleButton;
