import { createStore, combineReducers } from 'redux';
import moviesReducer, { createDefaultState } from './services/movies/reducers';

const combinedReducers = combineReducers({ movies: moviesReducer })

export default createStore(combinedReducers, { movies: createDefaultState() },  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())