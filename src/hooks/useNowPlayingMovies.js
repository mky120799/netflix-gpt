
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import appStore from "../utils/appStore";


const useGetNowPlayingMovies= () =>{

  const nowPlayingMovies = useSelector(appStore=>appStore.movies.nowPlayingMovies);

const dispatch = useDispatch();

  const getNowPlayingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1',
    API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));

  };
   
  useEffect(()=> {
   !nowPlayingMovies && getNowPlayingMovies();
  },[]);
}

  export default useGetNowPlayingMovies;