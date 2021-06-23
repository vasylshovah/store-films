import React from "react";
import {useSimilarFetch} from "../hooks/useSimilarFetch";
import {useParams} from 'react-router-dom';
import Grid from "../Grid";
import Thumb from "../Thumb";
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../config";
import NoImage from "../../images/no_image.jpg";


const Similar = () => {
    const {movieId} = useParams()
    const {state, error} = useSimilarFetch(movieId)

    if (error) return <div>Something went wrong</div>

    return (
        <>
            <Grid header='Recommended Movies'>
                {state.results.map(similar => (
                    <Thumb
                        key={similar.id}
                        clickable
                        movie={{
                            id: similar.id,
                            image: similar.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + similar.poster_path
                                : NoImage
                        }}
                        movieId = {similar.id}
                    />
                ))}
            </Grid>
        </>
    )
}

export default Similar