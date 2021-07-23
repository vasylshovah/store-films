import axios from "axios";
import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_URL,
    API_KEY,
    REQUEST_TOKEN_URL,
    LOGIN_URL,
    SESSION_ID_URL
} from './config';

const defaultConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

const apiSettings = {
    fetchMovies: async (searchTerm, page) => {
        const endpoint = searchTerm
            ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
            : `${POPULAR_BASE_URL}&page=${page}`;
        return (await  fetch(endpoint)).json();
    },
    fetchMovie: async movieId => {
        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        return (await fetch(endpoint)).json();
    },
    fetchSimilar: async movieId => {
        const endpoint = `${API_URL}movie/${movieId}/recommendations?api_key=${API_KEY}`;
        return (await fetch(endpoint)).json();
    },
    fetchCredits: async movieId => {
        const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        return (await fetch(creditsEndpoint)).json();
    },




    // getRequestToken: async () => {
    //     const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    //     return reqToken.request_token;
    // },
    getRequestToken2: async () => {
        const reqTokenData = await axios.get(REQUEST_TOKEN_URL);
        return reqTokenData.data.request_token;
    },
    authenticate: async (requestToken, username, password) => {
        const bodyData = {
            username,
            password,
            request_token: requestToken
        };
        const data = await axios.post(LOGIN_URL, bodyData);
        // if (data.data.success) {
        //     const sessionId = await (
        //         await fetch(SESSION_ID_URL, {
        //             ...defaultConfig,
        //             body: JSON.stringify({ request_token: requestToken })
        //         })
        //     ).json();
        //     return sessionId;
        // }
        if (data.data.success) {
            const sessionId =
                await axios.post(SESSION_ID_URL, {
                    body: JSON.stringify({ request_token: requestToken })
                }
            )
            return sessionId;
        }
    }
};

export default apiSettings;
