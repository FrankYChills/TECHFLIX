import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Featured.scss";

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    console.log("I got triggred");
    const randomMovie = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3500` +
            `/api/movies/random${type ? `?type=` + type : ``}`,
          {
            headers: {
              authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E0MTBlYTViYjBlMTY2MjY3NTZjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDM2NTkzNCwiZXhwIjoxNjc0OTcwNzM0fQ.IP28VZxkIjXAszWGtBBXRhDXAI5lKz274vqvqIeE328",
            },
          }
        );
        setContent(res.data.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    randomMovie();
  }, []);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option></option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>

            <option value="scifi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="romance">Romance</option>

            <option value="horror">Horror</option>
          </select>
        </div>
      )}
      <img src={content.mainImg} className="fimage" />
      <div className="info">
        <img src={content.titleImg} />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayCircleFilledWhiteOutlinedIcon />
            <span>Play</span>
          </button>
          <Link to={`/info/${content._id}`}>
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
