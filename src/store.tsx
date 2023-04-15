import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { Country } from "./country";


const CountriesContext = createContext({ countries: [] as Country[], setCountries: (() => { }) as Dispatch<SetStateAction<Country[]>> });

const CountriesProvider : FC<{children:ReactNode}>= ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesContext, CountriesProvider };
