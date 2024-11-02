import {Location, VisitLink} from "./Icons.tsx";

interface CountryCardProps {
  flag: string
  name: string
  capital: string;
  region: string;
  population: number;
}

export function CountryCard({region, population, flag, capital, name}: CountryCardProps) {
  return (
    <div className="bg-card border shadow-md p-4 rounded-lg space-y-5">
      <div>
        <img src={flag} alt={name} className="w-full h-60 rounded-md"/>
        <h3 className="text-3xl my-3 font-bold">{name}</h3>
      </div>
      <div className="space-y-2">
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
        <p>Population: {population}</p>
      </div>
      <div className="flex justify-center gap-x-2">
        <button className="border w-full p-1 rounded-md flex justify-center items-center gap-3">
          <VisitLink/>
          Details
        </button>
        <button className="border w-full p-1 rounded-md flex justify-center items-center gap-3">
          <Location/>
          See in map
        </button>
      </div>
    </div>
  )
}