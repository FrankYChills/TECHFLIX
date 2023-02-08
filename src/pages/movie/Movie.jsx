import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import HashLoader from "react-spinners/HashLoader";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

import "./Movie.scss";
import { authContext } from "../../context/auth/authContext";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { user } = useContext(authContext);
  const [favourites, setFavourites] = useState([]);
  const [favFetched, setFavFetched] = useState(false);
  const [addReqSuccess, setAddReqSuccess] = useState(false);

  const saveToList = async () => {
    const data = { type: "push", movieId: id };
    const res = await axios.put(
      process.env.REACT_APP_API_URL + `/api/users/${user._id}`,
      data,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    console.log(res);
    setAddReqSuccess(true);
  };

  useEffect(() => {
    setMovie({});
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
    const getFavourites = async () => {
      const res2 = await axios.get(
        process.env.REACT_APP_API_URL + `/api/users/find/${user._id}`
      );
      setFavourites(res2.data.data.favourites);
      setFavFetched(true);
    };
    getFavourites();
    getMovie();
  }, [addReqSuccess]);
  return (
    <div className="movie">
      {movie ? (
        <>
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
              {favourites.includes(id) ? (
                <CheckCircleOutlineOutlinedIcon className="icon" />
              ) : (
                <AddCircleOutlineOutlinedIcon
                  className="icon"
                  onClick={() => saveToList()}
                />
              )}

              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOutlinedIcon className="icon" />
            </div>
          </div>
        </>
      ) : (
        <div className="loader">
          <HashLoader color="#36d7b7" size={100} />
        </div>
      )}
    </div>
  );
};

export default Movie;
