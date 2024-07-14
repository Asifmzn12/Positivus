import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import "../index2.css";

function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <Button variant="secondary" onClick={toggleTheme} className="me-2 theme-toggler">
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </Button>
  );
}

export default ThemeToggler;
