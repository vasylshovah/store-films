import React, {useContext} from "react";
import ls from 'local-storage';
import {useDispatch} from "react-redux";
import {addFavoriteMovie, removeFavoriteMovie} from "../services/movies/actions/actionCreators";


const FavoriteContext = React.createContext()

export const useFavoriteContent = () => {
    return useContext(FavoriteContext)
}

export const FavoriteProvider = ({children}) => {
    const dispatch = useDispatch();

    const addToFavorite = (value) => {

        if (!value) {
            return
        }

        const favorites = ls.get('favorite') || []

        ls.set('favorite', [...favorites, value])
        dispatch(addFavoriteMovie({movie: value}))
    }

    const removeFromFavorite = (value) => {
        const favorites = ls.get('favorite') || []
        const result = favorites.filter(({movieId}) => movieId !== value.movieId) //todo use logic from reducer

        ls.set('favorite', result)
        dispatch(removeFavoriteMovie({movie: value}))
    }


    return (
        <FavoriteContext.Provider value={{ addToFavorite, removeFromFavorite}}
        >
            {children}
        </FavoriteContext.Provider>
    )
}