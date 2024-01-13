import React from 'react'

import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterpath}) => {

 if(!posterpath)return null;
  
  return (
    <div className='w-36 h-39 md:flex-shrink-0 md:w-[230px] md:h-49px m-2'>
        <img src={IMG_CDN + posterpath}></img>
    </div>
    
  )
}

export default MovieCard