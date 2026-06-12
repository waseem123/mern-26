import { useEffect, useState } from "react";

export function useCatData(cat_api_url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const controller = new AbortController();
        const { signal } = controller;

        async function fetchData() {
            try {
                const response = await fetch(cat_api_url, { signal })
                if (!response.ok) {
                    alert('Error in loading data')
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                } else {
                    const result = await response.json()
                    console.log(result)
                    setData(result)
                }
            } catch (err) {
                alert(err.message);
                if (err.name !== 'AbortError') {
                    setError(err.message || 'Something went wrong');
                }
            } finally {
                // Turn off the loader whether the fetch succeeded or failed
                if (!signal.aborted) {
                    setLoading(false);
                }
            }
        }
        fetchData();
        // Cleanup: Cancel the request if the component unmounts or URL changes
        return () => {
            controller.abort();
        };
    }, [cat_api_url])

    // Return the states as an object for easy destructuring
    return { data, loading, error };
}