import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Country } from "./country";


const CountriesContext = createContext({ countries: [] as Country[], setCountries: (() => { }) as Dispatch<SetStateAction<Country[]>> });

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesContext, CountriesProvider };
