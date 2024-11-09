import { Country } from "../types/index.ts";
import { CountryCard } from "./CountryCard.tsx";

interface FilteredCountriesProps {
  countries: Country[];
  searchTerm: string;
  selectedRegion: string;
}

export const FilteredCountries: React.FC<FilteredCountriesProps> = ({
  countries,
  searchTerm,
  selectedRegion,
}) => {
  const filteredCountries = countries.filter((country) => {
    const matchesName = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion
      ? country.region === selectedRegion
      : true;
    return matchesName && matchesRegion;
  });

  return (
    <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {filteredCountries.map((country, index) => (
        <li key={index}>
          <CountryCard
            flag={country.flags.png}
            name={country.name.common}
            region={country.region}
            capital={country.capital}
            population={country.population}
            map={country.maps.googleMaps}
          />
        </li>
      ))}
    </ul>
  );
};
