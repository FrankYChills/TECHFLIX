import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import "./Movie.scss";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get(
        `http://localhost:3500` + `/api/movies/find/${id}`,
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E0MTBlYTViYjBlMTY2MjY3NTZjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDM2NTkzNCwiZXhwIjoxNjc0OTcwNzM0fQ.IP28VZxkIjXAszWGtBBXRhDXAI5lKz274vqvqIeE328",
          },
        }
      );
      console.log("info res", res.data);
      setMovie(res.data);
    };
    getMovie();
  }, []);
  return (
    <div className="movie">
      <img src={movie.mainImg} className="bgImage" />
      <div className="info">
        <Link to="/" className="link">
          <div className="back">
            <ArrowBackOutlinedIcon className="icon" /> Home
          </div>
        </Link>
        <img className="titleImg" src={movie.titleImg} />
        <span className="desc">{movie.desc}</span>
        <Link to={`/watch/${id}`} className="link">
          <button className="play">
            <PlayCircleFilledWhiteOutlinedIcon className="playicon" />
            <span>Play</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Movie;
