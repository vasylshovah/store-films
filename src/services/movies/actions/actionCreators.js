import {
    ADD_FAVORITE_MOVIE,
    REMOVE_FAVORITE_MOVIE,
    FILL_FAVORITE_MOVIES,
    SHOW_ALERT,
    HIDE_ALERT,
    SHOW_LOADER, HIDE_LOADER
} from './actionTypes';

export const addFavoriteMovie = (payload = { movie: {} }, meta = {}) => {
    return { type: ADD_FAVORITE_MOVIE, payload, meta };
}

export const removeFavoriteMovie = (payload = { movie: {} }, meta = {}) => {
    return { type: REMOVE_FAVORITE_MOVIE, payload, meta }
}

export const fillFavoriteMovies = (payload = { movies: [] }, meta = {}) => {
    return { type: FILL_FAVORITE_MOVIES, payload, meta }
}


// alert actions
export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
        setTimeout(() => {
            dispatch(hideAlert())
        }, 2000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function showLoader() {
    return {type: SHOW_LOADER}
}

export function hideLoader() {
    return {type: HIDE_LOADER}
}