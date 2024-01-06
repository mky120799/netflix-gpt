import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  //  const BGOUND_IMG="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
   const[isSignInForm,setInSignInForm]=useState(true);
const toggleSignInForm=()=>{
     setInSignInForm(!isSignInForm);
}
 
 
   return (
    <div >
      <Header/>
      <div className='absolute bg-cover'>
           <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
             alt='image'>
           </img>
      </div>
      <form className="w-2/6 absolute my-36 p-12 bg-black mx-auto right-0 left-0 bg-opacity-80 rounded-md">
          <h1 className='font-100 text-3xl text-white'>{isSignInForm?"Sign In": "Sign Up"}</h1>
        {!isSignInForm && ( <input 
        type='text'
         placeholder='User Na' 
         className='p-4 my-4 w-full bg-gray-900  border-slate-900 border-2'
         />)}
        <input 
        type='text'
         placeholder='Email Address' 
         className='p-4 my-4 w-full bg-gray-900  border-slate-900 border-2'
         />
        <input 
        type='password'
         placeholder='Password' 
         className='p-4 my-4 w-full  bg-gray-900'
         />
        <button className='p-4 my-6 font-700 text-white bg-red-700 w-full rounded-lg'>{isSignInForm ?"Sign In": "Register"}</button>

        <p className='py-4 text-white cursor-pointer 'onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already Registered? Sign In Now"} </p>
      </form>
     

      
    </div>
    
  )
}

export default Login