import {useState,useEffect} from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";


const useFirebase=()=>{

   const[person,setPerson]=useState({});


   const auth=getAuth();
   const googleProvider = new GoogleAuthProvider();


   const signInWithGoogle=()=>{
     return  signInWithPopup(auth,googleProvider)
       
   }
// SIGNOUT============

 const logOut=()=>{
     signOut(auth)
     .then(()=>{
setPerson({})
     })
 }


   useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setPerson(user);
        }
    })
      
   }, [])


return{
    person,
    signInWithGoogle,
    logOut


}


}
export default useFirebase;