import { useEffect, useState } from "react";
import { CountryCard } from "../components/country-card";
import { CountryCardLoader } from "../components/country-card-loader";
import { CountrySearch } from "../components/country-search";
import { RegionFilter } from "../components/region-filter";
import { Seo } from "../components/seo";
import { API_URL } from "../lib/constants";
import { Country } from "../lib/definitions";

export function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [currentRegion, setCurrentRegion] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Country[]>([]);
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
        setFilteredCountries(data);
        setSearchResults(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    getCountries();
  }, []);

  useEffect(() => {
    let results = countries;
    
    if (currentRegion) {
      results = results.filter(country => country.region === currentRegion);
    }
    
    results = results.filter(country => searchResults.includes(country));
    
    setFilteredCountries(results);
  }, [currentRegion, searchResults, countries]);

  const handleRegionChange = (region: string) => {
    setCurrentRegion(region);
  };

  const handleSearchChange = (results: Country[]) => {
    setSearchResults(results);
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
      
      <div className="mb-8 space-y-6">
        <CountrySearch 
          countries={countries} 
          onSearchChange={handleSearchChange} 
        />
        <RegionFilter 
          countries={countries} 
          selectedRegion={currentRegion}
          onRegionChange={handleRegionChange} 
        />
      </div>
      
      {filteredCountries.length > 0 ? (
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
      ) : (
        <div className="text-center py-8">
          <p className="text-lg">No countries found. Try different search criteria.</p>
        </div>
      )}
    </section>
  );
}