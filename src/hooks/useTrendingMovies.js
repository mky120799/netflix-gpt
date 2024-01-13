
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

import { useEffect } from "react";
import { addTrendingMovies } from "../utils/moviesSlice";
import appStore from "../utils/appStore";


const useGetTrendingMovies= () =>{


const dispatch = useDispatch();
  
  const trendingMovies = useSelector(appStore=>appStore.movies.trendingMovies);

  const getTrendingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTrendingMovies(json.results));

  };
   
  useEffect(()=> {
   !trendingMovies && getTrendingMovies();
  },[]);
}

  export default useGetTrendingMovies;