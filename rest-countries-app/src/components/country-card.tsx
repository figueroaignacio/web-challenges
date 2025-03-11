import { Country } from "../lib/definitions"

type CountryCardProps = Country 

export function CountryCard({ flags, name, capital, population, region }: CountryCardProps) {
  return (
    <article className="h-full w-full bg-card border-border border rounded-xl">
      <img src={flags.png} alt={name.common} className="w-full h-56 rounded-lg" />
      <div className="px-4 py-8">
        <h2 className="font-bold text-xl mb-5">{name.common}</h2>
        <div className="flex flex-col text-sm space-y-3">
          <span>Population: {population}</span>
          <span>Capital: {capital}</span>
          <span>Region: {region}</span>
        </div>
      </div>
    </article>
  )
}