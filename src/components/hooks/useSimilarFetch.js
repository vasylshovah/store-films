import {useState, useEffect, useCallback} from "react";
import API from "../../API";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useSimilarFetch = movieId => {
    const [state, setState] = useState(initialState)
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchSimilar = useCallback(async () => {
        try {
            const similar = await API.fetchSimilar(movieId)
            setState(prev => ({
                ...similar,
                results: [...prev.results, ...similar.results]
            }))
        } catch (error) {
            setError(true)
        }
    }, [movieId])

    useEffect(() => {
        fetchSimilar()
    }, [movieId, fetchSimilar])
    return {state, loading, error}

}