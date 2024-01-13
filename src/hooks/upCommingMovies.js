
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

import { useEffect } from "react";
import { addUpCommingMovies } from "../utils/moviesSlice";



const useGetUpCommingMovies= () =>{

  const upCommingMovies = useSelector(appStore=>appStore.movies.upCommingMovies)

const dispatch = useDispatch();
    
  const GetUpCommingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpCommingMovies(json.results));

  };
   
  useEffect(()=> {
 !upCommingMovies &&   GetUpCommingMovies();
  },[]);
}

  export default useGetUpCommingMovies;