import { useEffect, useState } from "react"
import { CountryCard } from "../components/country-card"
import { API_URL } from "../lib/constants"
import { Country } from "../lib/definitions"

export function Home(){
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    async function getCountries() {
      const response = await fetch(API_URL)
      const data = await response.json()
      setCountries(data)
    }

    getCountries()
  }, [])

  return (
    <section className="my-12 mb-52">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-3">
        {countries.map((country, index) => (
          <li key={index}>
            <CountryCard capital={country.capital} 
              flags={country.flags} 
              name={country.name} 
              population={country.population} 
              region={country.region}
              />
          </li>
        ))}
      </ul>
    </section>
  )
}