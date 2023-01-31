import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

import "./Movie.scss";
import { authContext } from "../../context/auth/authContext";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { user } = useContext(authContext);

  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get(
        process.env.REACT_APP_API_URL + `/api/movies/find/${id}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      );

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
        <div className="icons">
          <AddCircleOutlineOutlinedIcon className="icon" />
          <ThumbUpOutlinedIcon className="icon" />
          <ThumbDownOutlinedIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Movie;
