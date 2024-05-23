import { useEffect, useState } from "react";


export default function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    async function fetchData() {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(url, { ...options });
            if (!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            setData(result);

        } catch (err) {
            setError(`Error: ${error}`);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url])

    return { data, error, loading };
}