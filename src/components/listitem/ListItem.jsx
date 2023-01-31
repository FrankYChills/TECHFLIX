import { useContext, useEffect, useState } from "react";
import axios from "axios";

import "./ListItem.scss";
import { Link } from "react-router-dom";
import { authContext } from "../../context/auth/authContext";

const ListItem = ({ itemId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const { user } = useContext(authContext);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + `/api/movies/find/${itemId}`,
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        );

        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [itemId]);
  const trailer = movie?.trailer;

  return (
    <Link to={`/info/${itemId}`} className="link">
      <div
        className="listItem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.mainImg} alt="" />
        {isHovered ? (
          <video src={trailer} autoPlay={true} muted={true} loop />
        ) : (
          ""
        )}

        <div className="item-info">
          <div className="itemInfoTop">
            <span>{movie.title}</span>
            <span className="limit">+{movie.ageLimit}</span>
            <span>{movie.year}</span>
          </div>

          <div className="genre">{movie.genre}</div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
