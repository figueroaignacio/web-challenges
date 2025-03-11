import { useEffect, useState } from "react"
import { CountryCard } from "../components/country-card"
import { Seo } from "../components/seo"
import { API_URL } from "../lib/constants"
import { Country } from "../lib/definitions"

export function Home(){
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getCountries() {
      try {
        setLoading(true);
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error("Countries not found");
        const data = await response.json()
        setCountries(data)
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    getCountries()
  }, [])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!countries) return <div>Country not found</div>;

  return (
    <section>
      <Seo title="Rest Countries App - Ignacio Figueroa's solution" description="Solution of Rest Countries App By Ignacio Figueroa" />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-3">
        {countries.map((country, index) => (
          <li key={index}>
            <CountryCard capital={country.capital} 
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
    </section>
  )
}