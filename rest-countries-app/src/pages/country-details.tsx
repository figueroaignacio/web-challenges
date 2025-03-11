import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BackButton } from "../components/back-button";
import { Seo } from "../components/seo";
import { API_URL_BY_NAME } from "../lib/constants";
import { Country } from "../lib/definitions";

export function CountryDetails() {
  const { slug } = useParams();
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCountry() {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL_BY_NAME}/${slug}`);
        if (!response.ok) throw new Error("Country not found");
        const data: Country[] = await response.json();
        setCountry(data[0]); 
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchCountry();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!country) return <div>Country not found</div>;

  return (
    <>
      <Seo title={country.name.common} description={""} />
      <BackButton />
      <h1 className="text-3xl font-bold">{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="mt-4 w-64 rounded-lg"
      />
      <a
        href={country.maps.googleMaps}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-500 underline"
      >
        View on Google Maps
      </a>
    </>
  );
}
