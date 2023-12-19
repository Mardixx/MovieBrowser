import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { Trending } from "../Trending/Trending";
import { useLocation } from "react-router-dom";
import { FullScreen } from "../FullScreen/FullScreen";
import { Similar } from "../Similar/Similar";
import { Genre } from "../Genre/Genre";
import { Search } from "../Search/Search";

const API_KEY = import.meta.env.VITE_APP_KEY;
const BEARER_TOKEN = import.meta.env.VITE_BEARER_TOKEN;

export const FetchTrending = () => {
  const [movieList, setMovieList] = useState([]);
  const randomIndex = Math.floor(Math.random() * movieList.length);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  };

  const fetchConst = () => {
    
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`, options)
    .then(response => response.json())
    .then(data => setMovieList(data.results.slice(0, 1)))
    .catch(error => console.error(error));
  }
  
  useEffect (() => {
    fetchConst();
  }, []) 

  return (
    <div className="trending">
      {movieList.map((index) => (
        <Banner key={index} moviesInfo={movieList[randomIndex]}/>
      ))}
    </div>
  )
  
}

export const FetchDiscover = () => {
  const [movieList, setMovieList] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  };

  const fetchConst = () => {
    
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`, options)
    .then(response => response.json())
    .then(data => setMovieList(data.results.slice(0, 10)))
    .catch(error => console.error(error));
  }
  
  useEffect (() => {
    fetchConst();
  }, []) 

  return (
    <>
      <h1>Discover: </h1>
      <div className="discover">
        {movieList.map((movie) => (
            <Trending key={movie.id} moviesInfo={movie}/>
        ))}
      </div>
    </>
  )
  
}
export const FetchMovie = () => {
  const [movieList, setMovieList] = useState([]);
  const [genreArray, setGenreArray] = useState([]);

  const location = useLocation();
   const id = location.state.from;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  };

  const fetchConst = () => {
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`, options)
    .then(response => response.json())
    .then(data => setMovieList(data))
    .catch(error => console.error(error));
  }
  const fetchGenre = () => {
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`, options)
    .then(response => response.json())
    .then(genre => setGenreArray(genre.genres))
    .catch(error => console.error(error));
  }

  
  useEffect (() => {
    fetchConst();
    fetchGenre();
  }, []) 

  
  return (
    <div className="fullPage">
        <FullScreen movie = {movieList}  genreSend = { genreArray } />
    </div>
  )
  
}
export const FetchSimilar = () => {
  const [movieList, setMovieList] = useState([]);

  const location = useLocation();
   const id = location.state.from;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  };

  const fetchConst = () => {
    
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`, options)
    .then(response => response.json())
    .then(data => setMovieList(data.results.slice(0, 5)))
    .catch(error => console.error(error));
  }
  
  useEffect (() => {
    fetchConst();
  }, []) 

  return (
      <div className="similar">
        {movieList.map(movie => (
          <Similar key = { movie.id } movieSimilar = { movie } />
        ))}
      </div>
  )
  
}
export const FetchGenreSame = () => {
  const [movieGenreList, setMovieGenreList] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  };

  const fetchConstGenre = () => {
    
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`, options)
    .then(response => response.json())
    .then(data => setMovieGenreList(data.genres))
    .catch(error => console.error(error));
  }
  
  useEffect (() => {
    fetchConstGenre();
  }, []) 

  return (
      <div className="genreSame">
          <Genre movieGenreSame = { movieGenreList } />
          
      </div>
  )
  
}
export const FetchSearch= () => {
  const [movieSearch, setMovieSearch] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  };

  const fetchConstSearch = () => {
    
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`, options)
    .then(response => response.json())
    .then(data => setMovieSearch(data.results))
    .catch(error => console.error(error));
  }
  
  useEffect (() => {
    fetchConstSearch();
  }, []) 

  console.log(movieSearch);

  return (
      <div className="genreSame">
          <Search movieSearchInfos = { movieSearch } />
      </div>
  )
  
}