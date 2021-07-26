import React, {useEffect, useState} from "react";

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
import PrivateRouter from "./privatePage/PrivateRouter";
import ProfilePage from "./privatePage/ProfilePage";

const App = () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') || false)

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
                        <Route path='/login' component={() => <LoginPage setIsAuth={setIsAuth}/>}/>
                        <PrivateRouter exact path='/profile' component={ProfilePage} isAuth={isAuth}/>
                        <Route path='/:movieId' component={Movie} />
                    </Switch>
                    <GlobalStyles />
                </UserProvider>
            </Router>
        </FavoriteProvider>
    )
};

export default App