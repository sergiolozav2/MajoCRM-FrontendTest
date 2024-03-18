import { useState } from "react";

type useServiceType<T> = {
  fn: (data: T) => Promise<void>;
};
export function useService<T>(config: useServiceType<T>) {
  const [data, setData] = useState<unknown>(undefined);
  const [error, setError] = useState<unknown>(undefined);
  const [loading, setLoading] = useState(false);

  function fetchData(params: T) {
    setLoading(true);
    config
      .fn(params)
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }

  return { data, error, loading, fetchData };
}
