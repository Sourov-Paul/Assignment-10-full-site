import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {
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
        <button className="btn-regular">Google Sign In</button>
</div>
        </div>
    );
};

export default Login;