import React from "react";
import {useParams} from 'react-router-dom';
import Spinner from "./Spinner";
import {useMovieFetch} from "./hooks/useMovieFetch";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import Similar from "./Similar";


const Movie = () => {
    const {movieId} = useParams()
    const {state: movie, loading, error} = useMovieFetch(movieId)


    if (loading) return <Spinner />
    if (error) return <div>Something went wrong</div>

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <Similar movie={movie.genres.map(m => m.name)}/>
        </>
    )
}

export default Movie