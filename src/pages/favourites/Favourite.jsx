import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { authContext } from "../../context/auth/authContext";
import HashLoader from "react-spinners/HashLoader";

import "./Favourite.scss";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
  const [favourites, setFavourites] = useState([]);

  const [movies, setMovies] = useState();
  const { user } = useContext(authContext);
  const [favFetched, setFavFetched] = useState(false);
  const [allFetched, setAllFetched] = useState(false);

  const navigate = useNavigate();

  const removeMovie = async (id) => {
    setAllFetched(false);
    setMovies();
    const data = { type: "pop", movieId: id };
    const res = await axios.put(
      process.env.REACT_APP_API_URL + `/api/users/${user._id}`,
      data,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    );

    setFavFetched(false);
  };

  useEffect(() => {
    const getMovies = async () => {
      const allMovies = [];
      for (const movieId of favourites) {
        if (!movieId) {
          setAllFetched(true);
          return;
        }
        const res = await axios.get(
          process.env.REACT_APP_API_URL + `/api/movies/find/${movieId}`,
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        allMovies.push(res.data);
      }
      setMovies(allMovies);
      setAllFetched(true);
    };
    const getFavourites = async () => {
      const res = await axios.get(
        process.env.REACT_APP_API_URL + `/api/users/find/${user._id}`
      );
      setFavourites(res.data.data.favourites);
      setFavFetched(true);
    };
    if (!favFetched) {
      getFavourites();
    }
    if (!movies && favFetched) {
      getMovies();
    }
  }, [favFetched]);
  return (
    <>
      <Navbar />
      <div className="favourite">
        {allFetched ? (
          <>
            {" "}
            <h1>Your Favourite Movies</h1>
            {!movies.length ? (
              <h3>No Favourite Movies</h3>
            ) : (
              <div className="favMovies">
                {movies.map((movie) => {
                  return (
                    <div className="favMovie" key={movie._id}>
                      <img src={movie.mainImg} />
                      <div className="bottom">
                        <button onClick={() => navigate(`/info/${movie._id}`)}>
                          Watch
                        </button>

                        <button
                          className="btn"
                          onClick={() => removeMovie(movie._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <div className="loader">
            <HashLoader color="#36d7b7" size={100} />
          </div>
        )}
      </div>
    </>
  );
};

export default Favourite;
