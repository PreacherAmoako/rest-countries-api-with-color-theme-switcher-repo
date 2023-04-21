import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import CountryCard from "../components/CountryCard"
import { getAllCountries } from "../services"
import { CountriesContext } from "../store";

export default function AllCountries() {
  const { countries, setCountries } = useContext(CountriesContext);

  // const [countries, setCountries] = useState<Country[]>([])
  const [searchText, setSearchText] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const filteredCountries = useMemo(() => {
    return countries
      .filter(country => `${country.name.official}${country.name.common}`.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
      .filter(country => country.region.includes(regionFilter))
  }, [countries, searchText, regionFilter]);

  const regions = useMemo(() => {
    return [...new Set(countries.map(country => country.region))]
  }, [countries]);

  // const loadCountries = useCallback(async () => {
  //   try {
  //     const data = (await getAllCountries()).data
  //     setCountries(data)
  //   } catch (err) {
  //     // TODO: notify user
  //     console.log(err)
  //   }
  // }, [setCountries])

  // useEffect(() => {
  //   loadCountries()
  // }, [loadCountries])

  return (
    <div className="AllCountries">
      <div className="filter-row">
        <input type="text" className="search-box" placeholder="Search for a country..." value={searchText} onChange={ev => setSearchText(ev.target.value)} />
        <select className="filter-box" placeholder="Filter by Region" value={regionFilter} onChange={ev => setRegionFilter(ev.target.value)}>
          <option value="">All Regions</option>
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>

      {filteredCountries.map((country, i) => (<div key={country.name.common} className="Country">
        <CountryCard country={country} />
      </div>)
      )}
    </div>
  )
}
