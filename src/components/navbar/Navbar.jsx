import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.scss";
import { authContext } from "../../context/auth/authContext";
import { logout } from "../../context/auth/apiCall";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { dispatch, user } = useContext(authContext);

  const navigate = useNavigate();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll(null);
  };

  const logOutUser = () => {
    logout(dispatch);
    navigate("/");
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="images/techflix-logo.png" />
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <span className="ext">Popular</span>
          <span className="ext">Favourites</span>
        </div>
        <div className="right">
          <SearchIcon className="icon ext" />
          <span className="name">{user.username}</span>
          <NotificationsNoneIcon className="icon ext" />
          <img src="images/newuser.png" />
          <div className="profile">
            <ExpandMoreIcon className="icon" />
            <div className="options" style={{ marginRight: "20px" }}>
              <span>Settings</span>
              <button onClick={logOutUser}>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
