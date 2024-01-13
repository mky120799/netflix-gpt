
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

import { useEffect } from "react";
import { addPopularMovies} from "../utils/moviesSlice";
import appStore from "../utils/appStore";


const useGetPopularMovies= () =>{

 const popularMovies = useSelector(appStore=>appStore.popularMovies);
const dispatch = useDispatch();

  const getPopularMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));

  };
   
  useEffect(()=> {
   !popularMovies && getPopularMovies();
  },[]);
}

  export default useGetPopularMovies;