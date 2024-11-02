import {useEffect, useState} from "react";

function useFetch(url: string) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(url)
        const data = await res.json()
        setData(data)
      } catch {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    }

    fetchData()
  }, [url])

  return {data, error, loading}
}

export default useFetch;