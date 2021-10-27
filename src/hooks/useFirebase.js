import {useState,useEffect} from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut ,createUserWithEmailAndPassword  } from "firebase/auth";


const useFirebase=()=>{
// user
   const[person,setPerson]=useState({});
// email
const [email,setEmail]=useState('');
//   password
const [password,setPassword]=useState('');

// error massage
const[error,setError]=useState('')

// Loading
const [isLoading,setIsLoading]=useState(true)


   const auth=getAuth();          
   const googleProvider = new GoogleAuthProvider();


   const signInWithGoogle=()=>{
    setIsLoading(true)
     return (
     
      signInWithPopup(auth,googleProvider)
      .catch(error=>{
        setError(error.massage);
    })
    .finally(()=> setIsLoading(false))
     ) 
       
   }
//    handel register
const handleRegistation=(e)=>{
    console.log(email,password);
    e.preventDefault();
    setEmail("")
    setPassword("")
    // password atlast 6 digit 
    if(password.length<8){
        setError('Password Must Be at last 8 Characters long.')
        return
         }
       if (!/(?=.*[A-Z])/.test(password)){
         setError("Password Must content 1 upper Case (A/B/C)")
         return
       }
       if (!/(?=.*[a-z])/.test(password)){
         setError("Password Must content 2 Lower Case (a/b/c/d)")
         return
       }
       if (!/(?=.*[0-9])/.test(password)){
         setError("Password Must content 1 Number (1/2/3)")
         return
       }
       if (!/(?=.*[!@#$&])/.test(password)){
         setError("Password Must content any Special Case (!/#/$/&)")
         return
       }


    createUserWithEmailAndPassword (auth,email,password)
    .then(result=>{
        const users=result.user;
        console.log(users)
        setError("")
      
    })
    .catch(error=>{
        setError(error.massage);
    })
}
// handel email value change
const handleEmailChange=e=>{
    setEmail(e.target.value)
}
// handel password change
const handlePasswordChange=(e)=>{
    setPassword(e.target.value)
}
// SIGNOUT============

 const logOut=()=>{
  setIsLoading(true)
     signOut(auth)
     .then(()=>{
setPerson({})
     })
     .finally(()=> setIsLoading(false));
 }


   useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setPerson(user);
        }
        else{
          setPerson({})
        }
        setIsLoading(false)
    })
      
   }, [])


return{
    person,
    signInWithGoogle,
    logOut,
    handleRegistation,
    handleEmailChange,
    handlePasswordChange,
    error,
    isLoading


}


}
export default useFirebase;