// src/components/DarkModeToggle.js
import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <div className="dark-mode-toggle">
      <button
        className="btn btn-secondary"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
