import { useState } from "react";
import { CountryCardLoader } from "../components/CountryCardLoader.tsx";
import { FilteredCountries } from "../components/FilteredCountries.tsx";
import { API } from "../config/api.ts";
import useFetch from "../hooks/useFetch.ts";
import { Country } from "../types";

export default function Home() {
  const {
    data: countries,
    loading,
    error,
  } = useFetch<Country[]>(API.ALL_COUNTRIES);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
  };

  const regions = ["", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  if (loading) {
    return (
      <main>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-4 px-6 py-1 rounded-lg border-border border bg-transparent"
        />
        <div className="flex flex-wrap mb-4">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => handleRegionChange(region)}
              className={`mr-2 mb-2 px-6 py-1 rounded-lg border bg-transparent ${
                selectedRegion === region ? "bg-skeleton" : "border-border "
              }`}
            >
              {region || "All"}
            </button>
          ))}
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Array(9)
            .fill(0)
            .map((_, index) => (
              <li key={index}>
                <CountryCardLoader />
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
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-4 px-6 py-1 rounded-lg border-border border bg-transparent"
        />
        <div className="flex flex-wrap mb-4">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => handleRegionChange(region)}
              className={`mr-2 mb-2 px-6 py-1 rounded-lg border bg-transparent ${
                selectedRegion === region ? "bg-skeleton" : "border-border "
              }`}
            >
              {region || "All"}
            </button>
          ))}
        </div>
      </div>
      {countries && (
        <FilteredCountries
          countries={countries}
          searchTerm={searchTerm}
          selectedRegion={selectedRegion}
        />
      )}
    </main>
  );
}
