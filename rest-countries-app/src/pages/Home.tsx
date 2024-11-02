import {API} from "../config/api.ts";
import useFetch from "../hooks/useFetch.ts";
import {CountryCard} from "../components/CountryCard.tsx";
import {Country} from "../types";
import {CountryCardLoader} from "../components/CountryCardLoader.tsx";

export default function Home() {
  const {data: countries, loading, error} = useFetch<Country[]>(API.ALL_COUNTRIES);

  if (loading) {
    return (
      <main>
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Array(9).fill(0).map((_, index) => (
            <li key={index}>
              <CountryCardLoader/>
            </li>
          ))}
        </ul>
      </main>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {countries?.map((country, index) => (
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
    </main>
  );
}
