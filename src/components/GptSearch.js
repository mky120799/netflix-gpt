import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMAGE_LOGIN } from '../utils/constants';
import GptSearchBar from './GptSearchBar'
const GptSearch = () => {
  return (
    <><div className='fixed -z-10'>
      <img src={BG_IMAGE_LOGIN} className="h-screen w-screen  object-cover"alt='bg_image' />
    </div><div className=''>

        <GptSearchBar />
        <GptMovieSuggestions />
      </div></>
  )
}

export default GptSearch