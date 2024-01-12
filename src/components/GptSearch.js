import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMAGE_LOGIN } from '../utils/constants';
import GptSearchBar from './GptSearchBar'
const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img  src={ BG_IMAGE_LOGIN } alt='bg_image'/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch