import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 pl-13 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className='my-4 flex'>
             
        <button className='bg-white text-black p-4 px-10 text-lg font-semibold rounded-md flex items-center  hover:opacity-70'>
  <img src='https://www.svgrepo.com/show/394180/google-play.svg' className='h-4 w-4 mr-2'></img>
  Play
</button>


            <button className='bg-gray-500 text-white p-0.5 px-9 ml-2 text-lg font-semibold bg-opacity-75 rounded-md  '> More Info </button>
        </div>
    </div>
  )
}

export default VideoTitle