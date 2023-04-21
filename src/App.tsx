import './App.css'
import TopNav from './components/TopNav'
import { RouterProvider } from "react-router-dom";
import { router } from './routes'
import { CountriesContext } from './store';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Country } from './country';
import { getAllCountries } from './services';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [theme, setTheme] = useState<'light-mode' | 'dark-mode'>('light-mode');

  const cca3ToCommonNameMap = useMemo(() => {
    return countries.reduce((acc, country) => {
      acc[country.cca3] = country.name.common
      return acc
    }, {} as Record<string, string>)
  }, [countries]);
  
  const toggleTheme = useCallback(() => {
    if (theme === 'dark-mode') setTheme('light-mode')
    else setTheme('dark-mode')
  }, [theme]);

  const loadCountries = useCallback(async () => {
    try {
      const data = (await getAllCountries()).data
      setCountries(data)
    } catch (err) {
      // TODO: notify user
      console.log(err)
    }
  }, [setCountries])

  useEffect(() => {
    loadCountries()
  }, [loadCountries])

  return (
    <CountriesContext.Provider value={{ countries, setCountries, cca3ToCommonNameMap }}>
      <div className={`App ${theme}`}>
        <TopNav onThemeToggle={toggleTheme} currentTheme={theme} />
        <RouterProvider router={router} />
      </div>
    </CountriesContext.Provider>
  )
}

export default App
