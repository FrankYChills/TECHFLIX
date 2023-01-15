import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src="images/techflix-logo.png" />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>Popular</span>
          <span>Favourites</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>Kid</span>
          <NotificationsNoneIcon className="icon" />
          <img src="images/profile-pic.jpeg" />
          <ExpandMoreIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
