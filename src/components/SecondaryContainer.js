import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movie = useSelector(appStore=> appStore.movies);


  return (
    movie.nowPlayingMovies && ( <div className='bg-black'>
      <div className='-mt-[68px] relative z-20'>
     <MovieList title ={"Now Playing"} movies={movie.nowPlayingMovies}/>
     <MovieList title ={"Trending"} movies={movie.trendingMovies}/>
     <MovieList title ={"Popular"} movies={movie.popularMovies}/>
     <MovieList title ={"Upcoming Movies"} movies={movie.upCommingMovies}/>
     <MovieList title ={"Horror"} movies={movie.nowPlayingMovies}/>
      </div >
     </div>)
     
    //  {/** 
    //   MovieList- Popular
    //    MovieCard * n 
    //   MovieList- Now Playing
    //   MovieList- Trending
    //   MovieList- Horror
    //  */}
    
  );
}

export default SecondaryContainer