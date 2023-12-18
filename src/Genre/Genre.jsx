import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Genre = (Infos) => {
    const location = useLocation();
    const id = location.state.from; 


    const genres = Infos.movieGenreSame;

    const [movieGenre, setMovieGenre] = useState([]);

    const genreIds = movieGenre.genre_ids

    const moviesGenre = ()  => {(
        setMovieGenre(genres)
    )}

    console.log(movieGenre);

    useEffect(() => {;
        moviesGenre();
    })    
}