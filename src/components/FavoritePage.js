import React from "react";
import Thumb from "./Thumb";
import Grid from "./Grid";
import {useSelector} from "react-redux";
import {getFavoriteMovies} from "../services/movies/reducers";



const FavoritePage = () => {
    const movies = useSelector(getFavoriteMovies)

    return (
        <>
            <Grid header={'Favorite Movies'}>
                {
                    movies.map((movie) => (
                        <Thumb
                            key={movie.id}
                            clickable
                            movie={{id: movie.id, image: movie.image}}
                        />
                    ))}
            </Grid>
        </>
    )
}

export default FavoritePage