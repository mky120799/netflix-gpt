import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'



const MainContainer = () => {
    const movies = useSelector((appStore) =>appStore.movies?.nowPlayingMovies);
    if (!movies) return ;
    const mainMovie = movies[0];
    // console.log("mainMovie" + mainMovie,mainMovie);

    const { original_title, overview, id } = mainMovie;
    // console.log(mainMovie.id);
  return (
    <div className='pt-[35%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground id={id}/>
    </div>

  )
}

export default MainContainer