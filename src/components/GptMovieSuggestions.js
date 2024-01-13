import React from 'react'
import { useSelector } from 'react-redux'
import appStore from '../utils/appStore'
import MovieList from './MovieList'
const GptMovieSuggestions = () => {

  const {movieResults, movieNames} = useSelector(appStore=>appStore.gpt)
  if(!movieResults) return null;

  return (
    <div className='text-white p-4 m-6 bg-black bg-opacity-70'>
      {
        movieNames.map((movieNames,index)=>(<MovieList key={movieNames} title={movieNames} movies={movieResults[index]}/>
        ))}
      </div>
  )
}

export default GptMovieSuggestions