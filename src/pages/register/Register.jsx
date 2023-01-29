import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./Register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <img className="register-bg" src="images/netflix-bg.jpg" />
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="images/techflix-logo.png" alt="" />
          <Link to="/login">
            <button className="loginButton">Sign In</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited Movies, TV Shows, and more.</h1>
        <h2>Watch Anywhere. Cancel Anytime</h2>
        <p>
          Ready to watch ? Enter your email to create or restart your
          membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" ref={emailRef} placeholder="Enter your email" />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="password"
              placeholder="Enter your password"
              ref={passwordRef}
            />
            <button className="registerButton" onClick={handleFinish}>
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
