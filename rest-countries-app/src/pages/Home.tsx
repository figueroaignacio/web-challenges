import {API} from "../config/api.ts";
import useFetch from "../hooks/useFetch.ts";
import {CountryCard} from "../components/CountryCard.tsx";

type Country = {
  flags: {
    png: string
  }
  name: {
    common: string;
  };
  region: string;
  capital: string;
  population: number
};

export default function Home() {
  const {data: countries, loading, error} = useFetch(API.ALL_COUNTRIES);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {countries?.map((country: Country, index: number) => (
          <li key={index}>
            <CountryCard
              flag={country.flags.png}
              name={country.name.common}
              region={country.region}
              capital={country.capital}
              population={country.population}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
