import { createContext, Dispatch, FC, ReactNode, SetStateAction, useCallback, useEffect, useState } from "react";
import { Country } from "./country";
import { getAllCountries } from "./services";

const CountriesContext = createContext({ countries: [] as Country[], setCountries: (() => { }) as Dispatch<SetStateAction<Country[]>>, cca3ToCommonNameMap: {} as Record<string, string> });

const CountriesProvider : FC<{children:ReactNode}>= ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const cca3ToCommonNameMap = {};

  return (
    <CountriesContext.Provider value={{ countries, setCountries, cca3ToCommonNameMap }}>
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesContext, CountriesProvider };
