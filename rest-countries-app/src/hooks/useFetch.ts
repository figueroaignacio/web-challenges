import {useEffect, useState} from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data: T = await res.json();
        setData(data);
      } catch {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return {data, error, loading};
}

export default useFetch;
