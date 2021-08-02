import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import moviesReducer, { createDefaultState } from './services/movies/reducers';
import {alertReducer} from "./services/movies/reducers/alertReducer";
import thunk from 'redux-thunk';
import {loadingReducer} from "./services/movies/reducers/loadingReducer";

const combinedReducers = combineReducers({
    movies: moviesReducer,
    app: alertReducer,
    load: loadingReducer
})

export default createStore(
    combinedReducers,
    { movies: createDefaultState() },
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)