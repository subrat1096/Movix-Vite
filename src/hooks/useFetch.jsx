import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("Loading...");
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((response) => {
        setLoading(false);
        setData(response);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong! " + err);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
