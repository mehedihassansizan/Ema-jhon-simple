/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../ContextProvider/ContextProvider";

const SignUp = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const {signUp} = useContext(AuthProvider)
    const navigate = useNavigate();

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('')
        setSuccess('')
        if (password.length < 6) {
            setError("Password must be 6 letter")
            return
        }

        if(password !== confirm){
            setError('confirm your pass')
            return
        }

        signUp(email, password)
        .then(result => {
            const signUpUser = result.user;
            setSuccess("Successfully Sign Up")
            navigate("/")
            form.reset();
        })
        .catch(error => {
            setError(error.message);
        })

    }

  return (
    <div>
      <div className="login-container">
        <form onSubmit={handleSignUp} className="from-control">
          <h1>Sign Up</h1>
          <div className="input-felid">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter Your Email" />
          </div>
          <div className="input-felid">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="input-felid">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Your Password"
            />
          </div>
          <div className="input-felid">
            <button className="btn-login">Sign Up</button>
          </div>
          <p>
            Already Have an account ?{" "}
            <Link to="/login" className="link-yellow">login</Link>
          </p>
          <p className="error-orange">
            {error}
          </p>
          <p className="success-green">{success}</p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
