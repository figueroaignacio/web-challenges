import { useEffect, useState } from "react";
import { CountryCard } from "../components/country-card";
import { CountryCardLoader } from "../components/country-card-loader";
import { RegionFilter } from "../components/region-filter"; // Importar el nuevo componente
import { Seo } from "../components/seo";
import { API_URL } from "../lib/constants";
import { Country } from "../lib/definitions";

export function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getCountries() {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Countries not found");
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data); // Inicialmente mostrar todos los países
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    getCountries();
  }, []);

  // Función para manejar el cambio en el filtro
  const handleFilterChange = (filteredResults: Country[]) => {
    setFilteredCountries(filteredResults);
  };

  if (loading) {
    return (
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-3">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index}>
            <CountryCardLoader />
          </li>
        ))}
      </ul>
    );
  }

  if (error) return <div>Error: {error}</div>;
  if (!countries.length) return <div>Countries not found</div>;

  return (
    <section>
      <Seo
        title="Rest Countries App - Ignacio Figueroa's solution"
        description="Solution of Rest Countries App By Ignacio Figueroa"
      />
      
      {/* Añadir el componente de filtro */}
      <RegionFilter 
        countries={countries} 
        onFilterChange={handleFilterChange} 
      />
      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-3">
        {filteredCountries.map((country, index) => (
          <li key={index}>
            <CountryCard
              capital={country.capital}
              flags={country.flags}
              name={country.name}
              population={country.population}
              region={country.region}
              maps={country.maps}
              slug={country.name.common}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}