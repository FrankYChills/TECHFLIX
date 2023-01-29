import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
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
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Enter your password" />
          <button type="loginButton">Sign In</button>
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
