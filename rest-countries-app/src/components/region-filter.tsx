import { useState } from "react";
import { Country } from "../lib/definitions";

interface RegionFilterProps {
  countries: Country[];
  onFilterChange: (filteredCountries: Country[]) => void;
}

export function RegionFilter({ countries, onFilterChange }: RegionFilterProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  
  // Obtener todas las regiones únicas de los países
  const regions = Array.from(new Set(countries.map(country => country.region)))
    .filter(region => region) // Eliminar valores vacíos
    .sort(); // Ordenar alfabéticamente
  
  const handleRegionClick = (region: string) => {
    // Si ya está seleccionada, deseleccionar
    const newRegion = selectedRegion === region ? "" : region;
    setSelectedRegion(newRegion);
    
    // Filtrar países por la región seleccionada
    const filteredCountries = newRegion 
      ? countries.filter(country => country.region === newRegion)
      : countries;
    
    onFilterChange(filteredCountries);
  };
  
  return (
    <div className="mb-8">
      <p className="mb-5">Filter by Region</p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleRegionClick("")}
          className={`px-4 py-2 rounded-xl transition-colors border-border border ${
            selectedRegion === "" 
               ? "bg-muted" 
               : "bg-card"
          }`}
          aria-pressed={selectedRegion === ""}
        >
          All Regions
        </button>
        
        {regions.map(region => (
          <button
            key={region}
            onClick={() => handleRegionClick(region)}
            className={`px-4 py-2 rounded-xl transition-colors border-border border ${
              selectedRegion === region 
                ? "bg-muted" 
                : "bg-card hover:bg-muted"
            }`}
            aria-pressed={selectedRegion === region}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
}