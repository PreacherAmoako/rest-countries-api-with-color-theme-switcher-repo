import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllCountries } from './services'
import { Country } from './country'
import TopNav from './components/TopNav'

function App() {
  const [countries, setCountries] = useState<Country[]>([])

  const loadCountries = async () => {
    try {
      const data = (await getAllCountries()).data
      setCountries(data)
    } catch (err) {
      // TODO: notify user
      console.log(err)
    }
  }

  useEffect(() => {
    loadCountries()
  }, [])

  return (
    <div className="App">
      <TopNav />

      <ul>
        {countries.map((country, i) => <li key={i}>{country.name.common}</li>)}
      </ul>
    </div>
  )
}

export default App
