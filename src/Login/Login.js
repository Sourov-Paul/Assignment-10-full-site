import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const{signInWithGoogle}=useAuth();

const location=useLocation();
const histry=useHistory();
const redirect_url=location.state?.from||"/home"
const handelGoogleLogIn=()=>{
    signInWithGoogle()
    .then(result=>{
       histry.push(redirect_url)
    })
}


    return (
        <div className="login-form">
<div>
<h2>Login</h2>
            <form onSubmit="">
          <span>Emial</span> <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            id=""
          />
          <br />
          <span>Password</span> <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            id=""
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p> <Link to="/register">Create Accounr</Link></p>
        <div>--------or------</div>
        <button onClick={handelGoogleLogIn} className="btn-regular">Google Sign In</button>
</div>
        </div>
    );
};

export default Login;