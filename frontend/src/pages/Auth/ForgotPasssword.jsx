import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="login-page">
      <div className="left-side">
        <img className="logo" src="/src/assets/img/Logo.png" alt="" />
        <p className="auth-p">Forgot your password</p>
        <input
          className="input"
          placeholder="Enter your email"
          type="email"
          required
        />
        <input className="button" type="submit" value="Submit" />
        <br />
        <Link className="auth-a" to="/login">
          Go to login
        </Link>
      </div>
      <div
        className="right-side"
        style={{
          backgroundImage: `url('/src/assets/img/Image Placeholder (7).png')`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default ForgotPassword;
