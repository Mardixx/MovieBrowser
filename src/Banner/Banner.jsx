import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = ({ moviesInfo }) => {
    
        return (
            <div className="banner">
                <Link to = '/discover' state = {{from: moviesInfo.id}} ><img className="backdrop" src={`https://image.tmdb.org/t/p/w500/${moviesInfo.backdrop_path}`} /></Link>
                <h3 className="titleBanner"><img className="playButton" src="/public/play-solid.svg" />{moviesInfo.original_title}</h3>
            </div>
        )
}

export default Banner;