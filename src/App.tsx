import './App.css'
import TopNav from './components/TopNav'
import { RouterProvider } from "react-router-dom";
import { router } from './routes'
import { CountriesContext } from './store';
import { useCallback, useState } from 'react';
import { Country } from './country';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [theme, setTheme] = useState<'light-mode' | 'dark-mode'>('light-mode');

  const toggleTheme = useCallback(() => {
    if (theme === 'dark-mode') setTheme('light-mode')
    else setTheme('dark-mode')
  }, [theme]);

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      <div className={`App ${theme}`}>
        <TopNav onThemeToggle={toggleTheme} currentTheme={theme} />
        <RouterProvider router={router} />
      </div>
    </CountriesContext.Provider>
  )
}

export default App
