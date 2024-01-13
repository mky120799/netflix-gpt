import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { removeUser } from '../utils/userSlice';
import { useEffect }  from 'react'
import { addUser } from '../utils/userSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';




const Header = () => {
    const user = useSelector(aapStore => aapStore.user);
    const showGptSearch = useSelector(aapStore => aapStore.gpt.showGptSearch)

   const navigate = useNavigate();
   const dispatch = useDispatch()

    const handleSignOut=()=>{
    signOut(auth).then(() => {
      // dispatch(removeUser());
      // navigate("/")

      
    }).catch((error) => {
      navigate("/error")
    });
 }  
   
 useEffect(()=>{

    const unsubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid, email, displayName, photoURL} = user;
      dispatch(
        addUser(
          {  uid:uid,
             email:email, 
             displayName:displayName, 
             photoURL: photoURL}
             ));
        navigate("/browse");
        return ()=> unsubscribe();
      // ...
    } else {
        dispatch(removeUser());
        navigate("/")
  
        
      // User is signed out
      // ...
    }
  });
       },[])
  
     const handleGptSearchClick=()=>{
        console.log("button click")
        dispatch(toggleGptSearchView());
     }
     const handleLanguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value))
     }
    return (
    <div  className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex-col md:flex md:flex-row justify-between'>
        <div className='w-44 mx-auto md:mx-0'>
             <img src={NETFLIX_LOGO}
              alt='image'>
             </img>
            </div>
        {user && (  <div  className='p-4 flex justify-between'>
             { showGptSearch && ( <select className='p-2 m-2 mr-10  bg-gray-800 border-white text-white' onChange={handleLanguageChange}>

                {SUPPORTED_LANGUAGES.map((lang)=>(
                  <option  key={lang.identifier} value={lang.identifier}>{lang.name}</option>

                ))}
                
               </select> )}

              <button className=' px-4 mr-12 bg-purple-800 text-white rounded-md'
              
              onClick={handleGptSearchClick}
              
              > { showGptSearch ?" Home Page" : "GPT search"} </button>
              <img className="w-12 h-12 mr-4"src={user?.photoURL} alt="User Image"></img>   
               <button onClick={handleSignOut} className='font-bold text-white ml-2 '>Sign Out</button>
                   </div>)
        } 
    </div>
  )
}

export default Header