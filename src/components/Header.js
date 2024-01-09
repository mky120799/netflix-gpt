import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { removeUser } from '../utils/userSlice';
import { useEffect }  from 'react'
import { addUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';



const Header = () => {
    const user = useSelector(aapStore => aapStore.user);

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
  


    return (
    <div  className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
        <div className='w-44 '>
             <img src={NETFLIX_LOGO}
              alt='image'>
             </img>
            </div>
        {user && (  <div  className='p-4 flex'>
              <img className="w-12 h-12"src={user?.photoURL} alt="User Image"></img>   
               <button onClick={handleSignOut} className='font-bold text-white ml-2'>Sign Out</button>
                   </div>)
        } 
    </div>
  )
}

export default Header