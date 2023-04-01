import './App.css'
import TopNav from './components/TopNav'
import { RouterProvider } from "react-router-dom";
import { router } from './routes'
import { CountriesContext } from './store';
import { useState } from 'react';
import { Country } from './country';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      <div className="App">
        <TopNav />
        <RouterProvider router={router} />
      </div>
    </CountriesContext.Provider>
  )
}

export default App
