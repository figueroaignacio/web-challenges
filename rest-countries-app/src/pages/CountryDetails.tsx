import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {API} from "../config/api.ts";
import {Country} from "../types";
import {BackButton} from "../components/BackButton.tsx";
import {CountryDetailsLoader} from "../components/CountryDetailsLoader.tsx";
import {Location} from "../components/Icons.tsx";


export default function CountryDetails() {
  const {countryName} = useParams<{ countryName: string }>();
  const {data: country, loading, error} = useFetch<Country[]>(`${API.COUNTRY_NAME}/${countryName}`);

  if (loading) {
    return <CountryDetailsLoader/>;
  }

  if (error) return <div className="text-center text-red-500 text-xl mt-8">Error loading country details</div>;

  if (!country || country.length === 0) {
    return <div className="text-center text-gray-500 text-xl mt-8">No country found</div>;
  }

  return (
    <section className="max-w-4xl mx-auto py-8">
      <div className="mb-8 max-w-52">
        <BackButton/>
      </div>
      <div className="rounded-lg overflow-hidden">
        <div className="relative h-64 md:h-96">
          <img
            src={country[0].flags.png}
            alt={country[0].name.common}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">{country[0].name.official}</h1>
          </div>
        </div>
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">General Information</h2>
              <ul className="space-y-2">
                <li><span className="font-medium">Capital:</span> {country[0].capital}</li>
                <li><span className="font-medium">Population:</span> {country[0].population.toLocaleString()}</li>
                <li><span className="font-medium">Region:</span> {country[0].region}</li>
                <li><span className="font-medium">Subregion:</span> {country[0].subregion}</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Additional Details</h2>
              <ul className="space-y-2">
                <li><span className="font-medium">Top level domains:</span> {country[0].tld?.join(', ')}</li>
                <li>
                  <span className="font-medium">Currencies:</span>{" "}
                  {Object.values(country[0].currencies)
                    .map(currency => `${currency.name} (${currency.symbol})`)
                    .join(', ')}
                </li>
                <li><span className="font-medium">Languages:</span> {Object.values(country[0].languages).join(', ')}
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Bordering Countries</h2>
            {country[0].borders?.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {country[0].borders.map((border: string, index: number) => (
                  <li key={index} className="border border-border text-sm font-medium px-3 py-1 rounded-full">
                    {border}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No bordering countries</p>
            )}
          </div>
          <div className="mt-8">
            <a
              href={country[0].maps.googleMaps}
              className="inline-flex w-full items-center justify-center border border-border gap-2 font-medium py-2 px-4 rounded-md transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Location/>
              Visit on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}