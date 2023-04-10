import { useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Country } from "../country";
import { CountriesContext } from "../store";

export default function CountryDetails() {
    const { commonName } = useParams<{ commonName: string }>();
    const { countries } = useContext(CountriesContext);
    const navigate = useNavigate();

    const [country] = useState<Country | undefined>(
        countries.find(country => country.name.common === commonName)
    );

    if (country === undefined) navigate('/')
    return (
        <div className="CountryDetails">
            <div className="row">
                <span><Link to='/'><img src="src\assets\back-arrow-white.svg" alt="Back icon light" />Back</Link></span>
            </div>
            <div className="row">
                <img src={country?.flags.png} alt={country?.flags.alt} />
                <div className="details">
                    <h3>{country?.name.common}</h3>
                    <div className="info-box">
                        <span><em>Native Name: </em> {country?.name.official}</span>
                        <span><em>Top Level Domain: </em> {country?.tld.join(', ')}</span>
                        <span><em>Population: </em> {country?.population}</span>
                        <span><em>Currencies: </em> {Object.values(country?.currencies ?? {}).map(cur => cur.name).join(', ')}</span>
                    </div>
                    <span>
                        <em>Border Countries: </em>
                        {country?.borders?.map(border => <span className="border-country">{border}</span>)}
                    </span>
                </div>
            </div>
        </div>
    )
}
