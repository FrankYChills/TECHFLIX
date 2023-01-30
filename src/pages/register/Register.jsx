import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../context/auth/apiCall";
import { authContext } from "../../context/auth/authContext";

import "./Register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const { dispatch } = useContext(authContext);

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    if (name && email && password) {
      signup({ email: email, password: password, username: name }, dispatch);
    }
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
          <>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <form className="input">
              <input
                type="password"
                placeholder="Enter your password"
                ref={passwordRef}
                onChange={() => setPassword(passwordRef.current.value)}
              />
              <button className="registerButton" onClick={handleFinish}>
                Sign Up
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
