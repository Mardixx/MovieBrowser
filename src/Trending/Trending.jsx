import { Link } from 'react-router-dom'
import './Trending.css'

export const Trending = ({ moviesInfo }) => {
    return (
        <div className="card">
            <Link to = '/discover' state = {{from: moviesInfo.id}} ><img className="poster" src={`https://image.tmdb.org/t/p/w500/${moviesInfo.poster_path}`} /></Link>
            <h4 className='rank'><img className='starRating' src='../public/star-solid.svg'/>{moviesInfo.vote_average}</h4>
            <h3 className="title">{moviesInfo.original_title}</h3>
        </div>
    )
}