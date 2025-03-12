import { FormEvent, KeyboardEvent, useState } from "react";
import { Country } from "../lib/definitions";
import { SearchIcon } from "./icons";

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
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}