import { Country } from "../lib/definitions";

interface RegionFilterProps {
  countries: Country[];
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

export function RegionFilter({ countries, selectedRegion, onRegionChange }: RegionFilterProps) {
  const regions = Array.from(new Set(countries.map(country => country.region)))
    .filter(region => region) 
    .sort(); 
  
  const handleRegionClick = (region: string) => {
    const newRegion = selectedRegion === region ? "" : region;
    onRegionChange(newRegion);
  };
  
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleRegionClick("")}
          className={`px-4 py-1 rounded-xl transition-colors border-border border ${
            selectedRegion === "" 
              ? "bg-muted" 
              : "bg-card hover:bg-muted"
          }`}
          aria-pressed={selectedRegion === ""}
        >
          All Regions
        </button>
        
        {regions.map(region => (
          <button
            key={region}
            onClick={() => handleRegionClick(region)}
            className={`px-4 py-1 rounded-xl transition-colors border-border border ${
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