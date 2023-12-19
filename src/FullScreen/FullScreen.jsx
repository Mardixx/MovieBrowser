import { Link } from 'react-router-dom';
import './FullScreen.css'

export const FullScreen = (Infos) => {  
    const infos = Infos.movie;
    const genres = Infos.genreSend


   
    return (
        <div className='infosForPage'>
            <img className="backdropFullPage" src={`https://image.tmdb.org/t/p/w500/${ infos.backdrop_path }`} width="100%" />
            <h1 className="titleFullPage">{ infos.original_title}</h1>
            <div className="smallInfos">
                <span className="runtime"><img src="/clock-regular.svg"/>{ infos.runtime } minutes</span>
                <span className='rating'><img src="/star-solid.svg"/>{ infos.vote_average }</span>
            </div>
            <div className="smallInfos2">
            <span className="releaseDate">Release Date: <br />{ infos.release_date}</span>
            <span className="genres">Genres: 
            {genres && genres.map(genre => (
                <Link to = '/genres' state = {{from: genre.id}}><button key={ genre.id } className='genreBtn'>{ genre.name }</button></Link>
            ))}
            </span>
            </div>
            <p className="overview">{ infos.overview }</p>
            <div className="relatedMovies">
                <span className='relatedTitle'>Related Movies: </span>
            </div>
        </div>
    )
    
}