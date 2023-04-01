import { Country } from "../country"
import "./CountryCard.css"
import { Link } from "react-router-dom";

interface CountryCardProps {
  country: Country;
}

export default function CountryCard(props: CountryCardProps) {
  return <div className="CountryCard">
    <img className="logo" src={props.country.flags.svg} alt={props.country.flags.alt} loading="lazy" />
    <div className="details">
      <h5 className="title">
        <Link to={props.country.name.common}>
          {props.country.name.common}
        </Link>
      </h5>
      <div className="detail"><em>Population:</em>{props.country.population}</div>
      <div className="detail"><em>Region:</em>{props.country.region}</div>
      <div className="detail"><em>Capital:</em>{props.country.capital?.join(', ')}</div>
    </div>
  </div>
}
