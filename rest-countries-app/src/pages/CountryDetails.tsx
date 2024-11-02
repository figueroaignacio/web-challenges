import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {API} from "../config/api.ts";
import {Country} from "../types";
import {BackButton} from "../components/BackButton.tsx";

export default function CountryDetails() {
  const {countryName} = useParams<{ countryName: string }>();

  const {data: country, loading, error} = useFetch<Country[]>(`${API.COUNTRY_NAME}/${countryName}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading country details</div>;

  if (!country || country.length === 0) {
    return <div>No country found</div>; // Handling case where no country is returned
  }

  return (
    <section className="space-y-6">
      <div className="max-w-52">
        <BackButton/>
      </div>
      <div>

        <h1 className="text-2xl font-bold">{country[0].name.common}</h1>
        <img src={country[0].flags.png} alt={country[0].name.common}/>
        <p><strong>Capital:</strong> {country[0].capital}</p>
        <p><strong>Region:</strong> {country[0].region}</p>
        <p><strong>Population:</strong> {country[0].population}</p>
      </div>
    </section>
  );
}
