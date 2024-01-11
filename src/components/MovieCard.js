import React from 'react'

import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterpath}) => {

 
  
  return (
    <div className='flex-shrink-0 w-[230px] h-49 m-2'>
        <img src={IMG_CDN + posterpath}></img>
    </div>
    
  )
}

export default MovieCard