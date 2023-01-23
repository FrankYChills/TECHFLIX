import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
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
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E0MTBlYTViYjBlMTY2MjY3NTZjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDM2NTkzNCwiZXhwIjoxNjc0OTcwNzM0fQ.IP28VZxkIjXAszWGtBBXRhDXAI5lKz274vqvqIeE328",
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
  const trailer =
    "https://player.vimeo.com/external/474290490.sd.mp4?s=8d9cd0017560b143939d744fe67459e98da3e8e2&profile_id=165&oauth2_token_id=57447761";

  return (
    <Link to={`/watch/${itemId}`}>
      <div
        className="listItem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.thumbnailImg} alt="" />
        {isHovered ? (
          <video src={trailer} autoPlay={true} muted={true} loop />
        ) : (
          ""
        )}

        <div className="item-info">
          <div className="icons">
            <PlayCircleFilledWhiteOutlinedIcon className="icon" />
            <AddCircleOutlineOutlinedIcon className="icon" />
            <ThumbUpOutlinedIcon className="icon" />
            <ThumbDownOutlinedIcon className="icon" />
          </div>
          <div className="itemInfoTop">
            <span>1 hour 20 minutes</span>
            <span className="limit">+{movie.ageLimit}</span>
            <span>{movie.year}</span>
          </div>
          <div className="desc">{movie.desc}</div>
          <div className="genre">{movie.genre}</div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
