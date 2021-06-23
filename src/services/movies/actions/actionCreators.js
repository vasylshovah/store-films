import {ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE, FILL_FAVORITE_MOVIES} from './actionTypes';

export const addFavoriteMovie = (payload = { movie: {} }, meta = {}) => {
    return { type: ADD_FAVORITE_MOVIE, payload, meta };
}

export const removeFavoriteMovie = (payload = { movie: {} }, meta = {}) => {
    return { type: REMOVE_FAVORITE_MOVIE, payload, meta }
}

export const fillFavoriteMovies = (payload = { movies: [] }, meta = {}) => {
    return { type: FILL_FAVORITE_MOVIES, payload, meta }
}
