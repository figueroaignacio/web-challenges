import { Link } from "react-router";
import { Country } from "../lib/definitions";
import { generateSlug } from "../lib/utils";

type CountryCardProps = Country;

export function CountryCard({ flags, name, capital, population, region, maps }: CountryCardProps) {
  const slug = generateSlug(name.common); 

  return (
    <article className="h-full w-full bg-card border-border border rounded-xl">
      <img src={flags.png} alt={name.common} className="w-full h-56 rounded-lg" />
      <div className="px-4 py-8 space-y-4">
        <h2 className="font-bold text-xl">{name.common}</h2>
        <div className="flex flex-col text-sm space-y-3">
          <span>Population: {population}</span>
          <span>Capital: {capital}</span>
          <span>Region: {region}</span>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/country/${slug}`}
            className="border-border border w-full hover:backdrop-brightness-200 rounded-2xl py-2 text-center hover:scale-[1.02] hover:rotate-1 duration-200 transition-all"
          >
            Country Details
          </Link>
          <Link
            to={maps.googleMaps}
            target="_blank"
            className="border-border border w-full hover:backdrop-brightness-200 rounded-2xl py-2 text-center hover:scale-[1.02] hover:rotate-1 duration-200 transition-all"
          >
            View In Map
          </Link>
        </div>
      </div>
    </article>
  );
}
