import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../context/auth/apiCall";
import { authContext } from "../../context/auth/authContext";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(authContext);

  const signInUser = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ email, password }, dispatch);
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };
  return (
    <div className="login">
      <img className="login-bg" src="images/login-bgg.jpg" />
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="images/techflix-logo.png" alt="" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="loginButton" onClick={signInUser}>
            Sign In
          </button>
          <span>
            New to Netflix ?{" "}
            <Link to="/register" className="link">
              <b>Sign up now.</b>
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
