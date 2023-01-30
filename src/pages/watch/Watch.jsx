import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

import "./Watch.scss";

const Watch = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3500" + `/api/movies/find/${id}`,
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
