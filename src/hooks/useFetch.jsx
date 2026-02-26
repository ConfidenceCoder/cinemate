import React, { useState,useEffect } from 'react'

export const useFetch = (api,query="") => {
    const [data,setData] = useState([]);
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/${api}?api_key=${API_KEY}&query=${query}`;
    useEffect(()=>{
        async function fetchMovies(){
          const response = await fetch(url)
          const json = await response.json()
          setData(json.results);
        }
        fetchMovies();
      },[url])

return {data};
}
