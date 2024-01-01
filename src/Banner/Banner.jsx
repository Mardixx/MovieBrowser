import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = ({ moviesInfo }) => {
    
        return (
            <div className="banner">
                <Link to = '/discover' state = {{from: moviesInfo.id}} ><img className="backdrop" src={`https://image.tmdb.org/t/p/original${moviesInfo.backdrop_path}`} alt="Movie Banner" /></Link>
                <h3 className="titleBanner"><img className="playButton" src="/play-solid.svg" alt="Play Button svg" />{moviesInfo.original_title}</h3>
            </div>
        )
}

export default Banner;