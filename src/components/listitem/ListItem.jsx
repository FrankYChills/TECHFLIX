import { useEffect, useState } from "react";
import axios from "axios";

import "./ListItem.scss";
import { Link } from "react-router-dom";

const ListItem = ({ itemId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3500" + `/api/movies/find/${itemId}`,
          {
            headers: {
              authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E0MTBlYTViYjBlMTY2MjY3NTZjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDk3MzM1MSwiZXhwIjoxNjc1NTc4MTUxfQ.WKlOb6hkiIQMY3tEvzh6WY-sT4Z4PsC8jarKABUFuRU",
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
