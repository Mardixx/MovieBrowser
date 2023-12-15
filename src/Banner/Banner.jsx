import "./Banner.css";

const Banner = ({ moviesInfo }) => {
    
        return (
            <div className="banner">
                <img className="backdrop" src={`https://image.tmdb.org/t/p/w500/${moviesInfo.backdrop_path}`} />
                <h3 className="title">{moviesInfo.original_title}</h3>
            </div>
        )
}

export default Banner;