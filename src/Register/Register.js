import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"
const Register = () => {
    return (
        <div>
                     <div>
                     <h2>Register</h2>
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
          <input
            type="password"
            name="password"
            placeholder="Re-Enter Your Password"
            id=""
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>Already Have an Account <Link to="/login"> Login</Link></p>
        <div>--------or------</div>
        <button className="btn-regular">Google Sign In</button>
                     </div>
        </div>
    );
};

export default Register;