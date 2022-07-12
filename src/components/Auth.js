import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

import "./Auth.css";

const Auth = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {

    e.preventDefault();

    dispatch(authActions.login())
  }

  const handleInput = (e) => {
    
  }

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" onChange={handleInput}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={handleInput}/>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
