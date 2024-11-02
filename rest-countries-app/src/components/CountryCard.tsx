import {Location, VisitLink} from "./Icons.tsx";
import {Link} from "react-router-dom";

interface CountryCardProps {
  flag: string
  name: string
  capital: string;
  region: string;
  population: number;
  map: string;
}

export function CountryCard({region, population, flag, capital, name, map}: CountryCardProps) {
  return (
    <div className="bg-card border-border border-[1px] p-4 rounded-lg space-y-5">
      <div>
        <img src={flag} alt={name} className="w-full h-40   rounded-md"/>
        <h3 className="text-2xl my-3 font-bold line-clamp-1">{name}</h3>
      </div>
      <div className="space-y-2">
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
        <p>Population: {population}</p>
      </div>
      <div className="flex justify-center gap-x-2">
        <Link to={`/country-details/${name}`}
              className="border-border border-[1px] w-full p-1 rounded-md flex justify-center items-center gap-3">
          Details
          <VisitLink/>
        </Link>
        <a className="border-border border-[1px] w-full p-1 rounded-md flex justify-center items-center gap-3"
           href={map}
           target="_blank">
          See in map
          <Location/>
        </a>
      </div>
    </div>
  )
}