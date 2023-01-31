import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Featured.scss";
import { authContext } from "../../context/auth/authContext";

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});
  const [sel, setSel] = useState("");
  const { user } = useContext(authContext);

  useEffect(() => {
    const randomMovie = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL +
            `/api/movies/random${type ? `?type=` + type : ``}`,
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        setContent(res.data.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    randomMovie();
  }, [type, sel]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => {
              setSel(e.target.value);
              setGenre(e.target.value);
            }}
          >
            <option></option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>

            <option value="scifi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="romance">Romance</option>
            <option value="action">Action</option>
          </select>
        </div>
      )}
      <img src={content.mainImg} className="fimage" />
      <div className="info">
        <img src={content.titleImg} />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <Link to={`/watch/${content._id}`} className="link">
            <button className="play">
              <PlayCircleFilledWhiteOutlinedIcon />
              <span>Play</span>
            </button>
          </Link>
          <Link to={`/info/${content._id}`} className="link">
            <button className="more">
              <InfoOutlinedIcon />
              <span>Info</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
