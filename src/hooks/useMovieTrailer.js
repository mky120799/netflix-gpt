import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect, useState } from "react";
import appStore from "../utils/appStore";


const useMovieTrailer=(movieId)=>{
  const trailerVideo = useSelector(appStore=>appStore.movies.trailerVideo)
    // console.log(movieId);
    const dispatch = useDispatch();
    
  const getMovieVideo = async (movieId) =>{
    // console.log("typeof movieId",typeof(movieId));
    const {id}=movieId;
    // console.log("typeof mid",typeof(id));
    // console.log("inside movieID",id);

    const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", API_OPTIONS);
    const json = await data.json();

    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
    

};


useEffect(()=>{
    
  !trailerVideo &&  getMovieVideo(movieId);
  },[]);
}

export default useMovieTrailer;