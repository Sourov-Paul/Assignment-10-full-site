import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Register.css";
const Register = () => {
  const {signInWithGoogle,handleRegistation,handleEmailChange,handlePasswordChange,error } = useAuth();

  return (
    <div className="container ">
      <div className="main_register">
        <h2 className="text-center"><i class="far fa-registered"></i> Please Registation here</h2>
        <form onSubmit={handleRegistation}>
          <h5 className="text-email"><i class="email_icon m-1 far fa-envelope"></i> Email: </h5>
          <input
          className="email"
          required
          onBlur={handleEmailChange}
            type="email"
            name="email"
            placeholder="Enter Your Email"
            id=""
          />
          
          <br />
          <h5  className="text-password"><i class="password_icon m-1 fas fa-unlock-alt"></i>Password: </h5>
          <input
          className="password"
          required
          onBlur={handlePasswordChange}
            type="password"
            name="password"
            placeholder="Enter Your Password"
            id=""
          />
         
          <br />
          <input className="register_btn border-0" type="submit" value="Register" />
        </form>
        <span className="text-danger"> {error}</span>
        <p>
          Already Have an Account <Link to="/login" className="login_move"> Login</Link>
        </p>
        <div className="border"></div>
        <button onClick={signInWithGoogle} className="btn btn-regular">
        <i class="m-1 google_icon fab fa-google-plus-g"></i>  Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Register;
