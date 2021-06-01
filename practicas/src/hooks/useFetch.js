import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    (async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        if (res.ok === false) {
          let err = new Error("Bad Request with Fetch");
          err.status =  res.status || "00";
          err.statusText = res.statusText || "Something went wrong";
          throw err;
        }

        const json = await res.json();

        if (signal.aborted === false) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (signal.aborted === false) {
          setData(null);
          setError(error);
        }
      } finally {
        if (signal.aborted === false) {
          setLoading(false);
        }
      }

    })();

    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
}
