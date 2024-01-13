import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({title, movies}) => {

    // console.log(movies)
  return (
  <div className='px-6'>
     <h1 className='font-bold text-white p-2 ml-10 mx-1 md:text-2xl text-xl'>{title}</h1>
       <div className='flex overflow-x-scroll no-scrollbar '>
    
     
    
    <div className='flex '>

     {movies.map((movie)=> <MovieCard key={movie.id} posterpath={movie.poster_path}/>)}
     </div>
     </div>

  </div>
  )
}

export default MovieList