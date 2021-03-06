import React, {useContext} from "react";
import Thumb from "../Thumb";
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../config";
import NoImage from '../../images/no_image.jpg';
import {Wrapper, Content, Text} from "./MovieInfo.styles";
import Rate from "../Rating/Rating";
import {Context} from "../../contextLogin/loginContext";
import API from "../../API";


const MovieInfo = ({movie}) => {
    const [user] = useContext(Context)
    const handleRating = async value => {
        const rate = await API.rateMovie(user.sessionId, movie.id, value)
        console.log(rate)
    }
    return (
        <Wrapper>
            <Content>
                <Thumb
                movie={{
                    id: movie.id,
                    image:movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                }}
                clickable={false}

                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>

                    <div className="rating-directors">
                    <div>
                        <h3>Rating</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}

                        <div>
                            <h2>Genre</h2>
                            {movie.genres.map(m => <div key={m.id}>{m.name}</div>)}
                        </div>
                    </div>

                </div>
                {user && (
                    <div>
                        <p>Rate Movie</p>
                        <Rate callback={handleRating} />
                    </div>
                )}
            </Text>
        </Content>
    </Wrapper>

)}

export default MovieInfo