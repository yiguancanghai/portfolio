import { useState, useEffect } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T>(
  fetchFn: () => Promise<T>,
  dependencies: any[] = []
): ApiState<T> {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFn();
        setState({ data, loading: false, error: null });
      } catch (err) {
        setState({
          data: null,
          loading: false,
          error: 'An error occurred while fetching data',
        });
      }
    }

    fetchData();
  }, dependencies);

  return state;
} 