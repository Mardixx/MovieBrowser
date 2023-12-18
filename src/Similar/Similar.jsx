import { Link } from "react-router-dom";
import "./Similar.css"

export const Similar = (movieSimilar) => {
    const similar = movieSimilar.movieSimilar; 

    const reload = () => {
        window.location.reload()
    }


    return (
        <div className="card">
            <Link to = '/discover' state = {{from: similar.id}} ><img className="posterSimilar" src={`https://image.tmdb.org/t/p/w500/${similar.poster_path}`} onClick={ reload } /></Link>
            <h4 className='rank'><img className='starRating' src='../public/star-solid.svg'/>{similar.vote_average}</h4>
            <h3 className="title">{similar.original_title}</h3>
        </div>
    )
}