import { useEffect, useState } from "react";

export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchController = new AbortController();
    setError(null);
    setLoading(true);
    setData(null);

    const handleFetch = async () => {
      try {
        const response = await fetch(url, { signal: fetchController.signal });
        if (!response.ok) {
          throw Error(" Something went wrong");
        }
        const data = await response.json();
        data && setData(data);
        setLoading(false);
      } catch (err) {
        if (err.name === "AbortError") {
          setError(null);
        }
        setLoading(false);
        setError(err.message);
      }
    };
    handleFetch();

    return () => {
      fetchController.abort();
    };
  }, [url]);
  return { loading, data, error };
}
