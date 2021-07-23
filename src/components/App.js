import React from "react";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {GlobalStyles} from "../GlobalStyles";
import Header from "./Header";
import Home from "./Home";
import Movie from "./Movie";
import {FavoriteProvider} from "../context/FavoriteContext";
import FavoritePage from "./FavoritePage";
import ls from "local-storage";
import {fillFavoriteMovies} from "../services/movies/actions/actionCreators";
import {useDispatch} from "react-redux";
import LoginPage from "./Login/LoginPage";
import UserProvider from "../contextLogin/loginContext";

const App = () => {
    const dispatch = useDispatch();
    const favorites = ls.get('favorite') || [];
    dispatch(fillFavoriteMovies({ movies: favorites }))

    return (
        <FavoriteProvider>
            <Router>
                <UserProvider>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/favorite' component={FavoritePage}/>
                        <Route path='/login' component={LoginPage} />
                        <Route path='/:movieId' component={Movie} />
                    </Switch>
                    <GlobalStyles />
                </UserProvider>
            </Router>
        </FavoriteProvider>
    )
};

export default App