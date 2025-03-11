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
    const getCountry = async () => {
      try {
        setLoading(true);
        if (!slug) throw new Error("Slug is undefined");
        const query = slug.replace(/-/g, " ");
        const response = await fetch(`${API_URL_BY_NAME}/${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error("Country not found");
        const data: Country[] = await response.json();
        setCountry(data[0]);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getCountry();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!country) return <div>Country not found</div>;

  const nativeNames = country.name.nativeName
    ? Object.values(country.name.nativeName).map((n) => n.common).join(", ")
    : "N/A";

  const currencies = country.currencies
    ? Object.values(country.currencies).map((c) => c.name).join(", ")
    : "N/A";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  return (
    <>
      <Seo title={country.name.common} description={country.flags.alt || "No description available"} />
      <BackButton />
      <article className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6">
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="mt-4 w-full h-96 rounded-lg"
          />
        </div>
        <div className="lg:col-span-6 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{country.name.common}</h1>
          <div className="lg:flex lg:justify-between">
            <div className="space-y-4 mb-4">
              <p><strong>Native name:</strong> {nativeNames}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion || "N/A"}</p>
              <p><strong>Capital:</strong> {country.capital?.join(", ") || "N/A"}</p>
            </div>
            <div className="space-y-4">
              <p><strong>Top Level Domain:</strong> {country.tld?.join(", ") || "N/A"}</p>
              <p><strong>Currencies:</strong> {currencies}</p>
              <p><strong>Languages:</strong> {languages}</p>
            </div>
          </div>
          {country.borders && country.borders.length > 0 && (
            <div>
              <p><strong>Border Countries:</strong></p>
              <div className="flex flex-wrap gap-2 mt-2">
                {country.borders.map((border) => (
                  <div
                    key={border}
                    className="px-3 py-1 bg-card rounded-md border border-border"
                  >
                    {border}
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="w-full flex gap-x-2">
              <a
                href={country.maps.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-border border text-center py-2 rounded-xl hover:backdrop-brightness-200"
              >
               View on Google Maps
              </a>
              <a 
                href={country.maps.openStreetMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-border border text-center py-2 rounded-xl hover:backdrop-brightness-200"
              >
                View on OpenStreetMaps
              </a>
          </div>
        </div>
      </article>
    </>
  );
}
