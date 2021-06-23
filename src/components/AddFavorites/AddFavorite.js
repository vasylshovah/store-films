import React, {useState} from "react";
import {useFavoriteContent} from "../../context/FavoriteContext";
import './AddFavorite.css'
import {useSelector} from "react-redux";
import {isFavoriteMovie} from "../../services/movies/reducers";



const AddFavorite = ({movie}) => {
    const {addToFavorite, removeFromFavorite} = useFavoriteContent()
    const [state, setState] = useState(true)

    const favoriteMovie = useSelector(isFavoriteMovie(movie))

    const toggle = () => {
        setState(!state)
    }

    const addMovieFunc = () => {
        addToFavorite(movie)
        toggle()
    }

    const removeMovieFunc = () => {
        removeFromFavorite(movie)
        toggle()
    }

    return (
        <>
            {favoriteMovie
                ? <button className="remove-favorite"
                          onClick={() => removeMovieFunc(movie)}
                >
                        Remove from Favorite
                    </button>

                : <button className="add-favorite" onClick={() => addMovieFunc()}

                >
                    {<span>Add to Favorite</span>}
                </button>
            }

        </>
    )
}

export default AddFavorite