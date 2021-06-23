import React from 'react';
import {useHomeFetch} from './hooks/useHomeFetch';
import { POSTER_SIZE, IMAGE_BASE_URL } from '../config';
import NoImage from '../images/no_image.jpg';
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

const Home = () => {
    const {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch()

    if (error) return <div>Something went wrong!</div>

    return (
        <>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {state.results.map(movie => (
                   <Thumb
                       key={movie.id}
                       clickable
                       movie={{
                           id: movie.id,
                           image:  movie.poster_path
                               ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                               : NoImage
                       }}
                   />
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button
                    text='Load More'
                    callback={() => setIsLoadingMore(true)}
                />
            )}
        </>
    )
};

export default Home
