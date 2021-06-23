import React from "react";
import {Link} from "react-router-dom";
import {Image} from "./Thumb.styles";
import AddFavorite from "../AddFavorites/AddFavorite";


const Thumb = ({ movie, clickable }) => {
    const { image, id: movieId } = movie;
    return (
        <>
            <div>
                {clickable ? (
                    <Link to={`/${movieId}`}>
                        <Image src={image} alt='movie-thumb'/>
                    </Link>
                ) : (<Image src={image} alt='movie-thumb'/>)}
                <AddFavorite movie={movie}/>
            </div>
        </>
    )
}

export default Thumb