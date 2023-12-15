import './Trending.css'

export const Trending = ({ moviesInfo }) => {
    return (
        <div className="card">
            <img className="poster" src={`https://image.tmdb.org/t/p/w500/${moviesInfo.poster_path}`}/>
            <h3 className="title">{moviesInfo.original_title}</h3>
        </div>
    )
}