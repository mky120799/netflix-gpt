import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValideData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { 
  createUserWithEmailAndPassword,
   signInWithEmailAndPassword, 
   updateProfile } from "firebase/auth"; 
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BG_IMAGE_LOGIN } from '../utils/constants';
import { PHOTO_URL } from '../utils/constants';





const Login = () => {
    
    const[isSignInForm, setInSignInForm]=useState(true); ///for toggling sign in to sign up 
    const[errorMessage, setErrorMessage]= useState(null);
    const navigate=useNavigate();
    const dispatch = useDispatch();
     const name = useRef(null);
    const email = useRef(null);    /// For the reference to the input fields
    const password= useRef(null);  /// For the reference to the input fields


    
    const handleButtonClick=()=>{     //// handle sign In and sign Up data
        const message=checkValideData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message)return;

        if(!isSignInForm){
          // Sign Up form logic
         
              createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                updateProfile(user, {
                  displayName: name.current.value,
                  photoURL:PHOTO_URL,
                }).then(() => {
                  
                  const {uid, email, displayName, photoURL} = auth.currentUser;
                  dispatch(
                    addUser(
                        {
                         uid:uid,
                         email:email, 
                         displayName:displayName, 
                         photoURL: photoURL
                        }));
                  // Profile updated!
                  
                  // ...
                }).catch((error) => {
                  // An error occurred
                  setErrorMessage(error.message);
                  // ...
                });
                // console.log(user);
                
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"--"+errorMessage);
                // ..
              });

        }
        else{
         
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // console.log(user)
              
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+"--"+error.message);
            });
          
        }
    }
  
  
   const toggleSignInForm=()=>{
     setInSignInForm(!isSignInForm);
    }
 
 
   return (
    <div >
      <Header/>
      <div className='absolute bg-cover'>
           <img src={BG_IMAGE_LOGIN}
             alt='image'>
           </img>
      </div>
      <form  onSubmit={(e) => {
    e.preventDefault();  }} 
    className="w-2/6 absolute my-36 p-12 bg-black mx-auto text-white right-0 left-0 bg-opacity-80 rounded-md">

        <h1 className='font-100 text-3xl text-white'>{isSignInForm?"Sign In": "Sign Up"}</h1>

        {!isSignInForm && ( <input 
        type='text' ref={name}
         placeholder='User Na' 
         className='p-4 my-4 w-full bg-gray-900 text-white border-slate-900 border-2'
         />)}

        <input 
        ref={email}
        type='text'
         placeholder='Email Address' 
         className='p-4 my-4 w-full bg-gray-900 text-white  border-slate-900 border-2'
         />

        <input 
        ref={password}
        type='password'
         placeholder='Password' 
         className='p-4 my-4 w-full text-white bg-gray-900'
         />

        

         <div className='text-red-700'>{errorMessage}</div>  {/* {error message here} */}

        <button className='p-4 my-6 font-700 text-white bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ?"Sign In": "Register"}</button>

        <p className='py-4 text-white cursor-pointer 'onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already Registered? Sign In Now"} </p>
      
      </form>
     

      
    </div>
    
  )
}

export default Login