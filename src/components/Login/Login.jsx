/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../ContextProvider/ContextProvider";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const {login} = useContext(AuthProvider)
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location);
  const from = location?.state?.from?.pathname || '/'

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    setError('')
    setSuccess('')

    login(email, password)
    .then(result =>{
      const logInUser = result.user;
      event.target.reset()
      setSuccess("Log IN SuccessFully")
      navigate(from, { replace: true })
    })
    .catch(error => {
      setError(error.message)
    })

  };

  return (
    <div>
      <div className="login-container">
        <form onSubmit={handleLogin} className="from-control">
          <h1>Login</h1>
          <div className="input-felid">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter Your Email" />
          </div>
          <div className="input-felid">
            <label htmlFor="password">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password"
            />
          </div>
          <input onClick={() => setShow(!show)} type="checkbox" name="" id="" className="check-box-login"/>
          <span>{show ? "Hide Password" : "Show Password"}</span>
          <div className="input-felid">
            <button className="btn-login">Log In</button>
          </div>
          <p>
            New To EmaJhon ?{" "}
            <Link to="/signUp" className="link-yellow">
              Create new Account
            </Link>
          </p>
          <p className="error-orange">{error}</p>
          <p className="success-green">{success}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
