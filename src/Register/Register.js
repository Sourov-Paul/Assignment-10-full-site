import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Register.css";
const Register = () => {
  const {signInWithGoogle,handleRegistation,handleEmailChange,handlePasswordChange,error } = useAuth();

  return (
    <div className="container ">
      <div className="main_register">
        <h2 className="text-center">Please Registation here</h2>
        <form onSubmit={handleRegistation}>
          <h5 className="text-email">Email: </h5>
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
          <h5  className="text-password">Password: </h5>
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
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Register;
