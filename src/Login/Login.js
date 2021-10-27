import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const{signInWithGoogle,handleRegistation,error,handleEmailChange,handlePasswordChange}=useAuth();

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
        <div className=" container login-form">
<div className="main_register">
<h2 className="text-center login_here"><i className="m-2 sign-in fas fa-sign-in-alt"></i>Login</h2>
            <form onSubmit={handleRegistation}>
            <h5 className="text-email"><i class="email_icon m-1 far fa-envelope"></i>Email: </h5>

          <input
             className="email"
             required
            type="email"
            name="email"
            onBlur={handleEmailChange}
            placeholder="Enter Your Email"
            id=""
          />
          <br />
          <h5  className="text-password"><i class="password_icon m-1 fas fa-unlock-alt"></i>Password: </h5>
          <input
           className="password"
           onBlur={handlePasswordChange}
            type="password"
            name="password"
            placeholder="Enter Your Password"
            id=""
          />
          <br />
          <input className="register_btn border-0" type="submit" value="Submit" />
        </form>
        <span className="text-danger"> {error}</span>
        <div className="border"></div>
        <p> <Link  className="login_move" to="/register">Create Accounr</Link></p>
        <div className="bprder"></div>
        <button onClick={handelGoogleLogIn} className="btn btn-regular google">
<i class="m-1 google_icon fab fa-google-plus-g"></i> Google Sign In</button>
</div>
        </div>
    );
};
export default Login;