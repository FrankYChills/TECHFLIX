import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useState, useEffect, useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

import "./Watch.scss";
import { authContext } from "../../context/auth/authContext";

const Watch = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { user } = useContext(authContext);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + `/api/movies/find/${id}`,
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
  }, [id]);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlinedIcon className="icon" /> Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        muted
        controls
        //change src to movie.video
        src={movie?.trailer}
        controlsList={["nodownload"]}
      />
    </div>
  );
};

export default Watch;
