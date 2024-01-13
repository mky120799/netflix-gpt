import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 pl-13 absolute text-white md:w-screen md:aspect-video md:pt-[20%] md:px-12 pl-13 md:absolute md:text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-5xl font-bold'>{title}</h1>
        <p className='hidden md:block : md:py-6 md:text-lg md:w-1/4'>{overview}</p>
        <div className='my-4 md:my-4 md:flex'>
             
        <button className='bg-white py-3 text-black p-2 px-7 text-lg font-semibold rounded-2xl flex items-center  hover:opacity-70 md:bg-white  md:text-black md:p-4 md:px-10 md:text-lg md:font-semibold md:rounded-md md:flex md:items-center  md:hover:opacity-70'>
  <img src='https://www.svgrepo.com/show/394180/google-play.svg' className='h-4 w-4 mr-2'></img>
  Play
</button>


            <button className=' hidden md:block md:bg-gray-50 md:text-white md:p-0.5 md:px-9 md:ml-2 md:text-lg md:font-bold md:bg-opacity-25 md:rounded-md'> More Info </button>
        </div>
    </div>
  )
}

export default VideoTitle