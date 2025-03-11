import { FormEvent, KeyboardEvent, useState } from "react";
import { Country } from "../lib/definitions";

interface CountrySearchProps {
  countries: Country[];
  onSearchChange: (filteredCountries: Country[]) => void;
}

export function CountrySearch({ countries, onSearchChange }: CountrySearchProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      onSearchChange(countries);
      return;
    }
    
    const filteredCountries = countries.filter(country => 
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (country.name.official && country.name.official.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    onSearchChange(filteredCountries);
  };
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };
  
  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for a country..."
          className=" px-4 py-2 pl-12 border-border border rounded-xl  focus:outline-none"
          aria-label="Search for a country"
        />
        <button
          type="submit"
          className="absolute left-4 top-1/2 transform -translate-y-1/2"
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}