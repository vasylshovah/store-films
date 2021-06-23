import {ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE, FILL_FAVORITE_MOVIES} from './../actions/actionTypes';
export const createDefaultState = () => {
    return {
        favorite: []
    }
}

// eslint-disable-next-line
export default (state = createDefaultState(), action) => {
    switch (action.type) {
        case ADD_FAVORITE_MOVIE: {
            return {
                ...state,
                favorite: [
                    ...state.favorite,
                    action.payload.movie,
                ],
            };
        }
        case REMOVE_FAVORITE_MOVIE: {
            return {
                ...state,
                favorite: state.favorite.filter((movie) => { return movie.id !== action.payload.movie.id }),
            }
        }
        case FILL_FAVORITE_MOVIES: {
            return {
                ...state,
                favorite: [...action.payload.movies],
            }
        }
        default: return state
    }
}

export const getFavoriteMovies = (state = createDefaultState()) => {
    return state.movies.favorite
}

export const isFavoriteMovie = (movie) => (state = createDefaultState()) => {
    return state.movies.favorite.some((favoriteMovie) => { return movie.id === favoriteMovie.id })
}
