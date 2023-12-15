import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { Trending } from "../Trending/Trending";

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
  
  console.log(movieList[randomIndex]);

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
    <div className="discover">
      {movieList.map((movie, index) => (
        <Trending key={index} moviesInfo={movie}/>
      ))}
    </div>
  )
  
}