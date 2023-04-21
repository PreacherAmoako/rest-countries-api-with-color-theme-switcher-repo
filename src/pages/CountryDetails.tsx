import { useContext, useMemo, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Country } from "../country";
import { CountriesContext } from "../store";

export default function CountryDetails() {
    const { commonName } = useParams<{ commonName: string }>();
    const { countries, cca3ToCommonNameMap } = useContext(CountriesContext);
    const navigate = useNavigate();

    const country = useMemo<Country | undefined>(
        () => countries.find(country => country.name.common === commonName),
        [countries]
    );

    return (
        <div className="CountryDetails">
            <div className="row">
                <span><Link to='/'><img src="src\assets\back-arrow-white.svg" alt="Back icon light" />Back</Link></span>
            </div>
            <div className="row details-row">
                <img src={country?.flags.png} alt={country?.flags.alt} />
                <div className="details">
                    <h2>{country?.name.common}</h2>
                    <div className="info-box">
                        <span><em>Native Name: </em> {country?.name.official}</span>
                        <span><em>Top Level Domain: </em> {country?.tld.join(', ')}</span>
                        <span><em>Population: </em> {country?.population}</span>
                        <span><em>Currencies: </em> {Object.values(country?.currencies ?? {}).map(cur => cur.name).join(', ')}</span>
                        <span><em>Region: </em> {country?.region}</span>
                        <span><em>Languages: </em> {Object.values(country?.languages ?? {}).map(lang => lang).join(', ')}</span>
                        <span style={{ flex: '100% 0 0' }}><em>Sub Region: </em> {country?.subregion}</span>
                        <span style={{ flex: '100% 0 0' }}><em>Capital: </em> {country?.capital}</span>
                    </div>
                    <div className="border-countries">
                        <em>Border Countries: </em>
                        {country?.borders?.map((borderCountryCCA3Code, i) => <span key={i} className="border-country">{cca3ToCommonNameMap[borderCountryCCA3Code] ?? cca3ToCommonNameMap}</span>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
