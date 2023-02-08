import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Movie from "./pages/movie/Movie";
import { authContext } from "./context/auth/authContext";
import Favourite from "./pages/favourites/Favourite";

function App() {
  const { user } = useContext(authContext);

  useEffect(() => {}, [user]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />

        {user && (
          <>
            {" "}
            <Route path="movies" element={<Home type="movie" />} />
            <Route path="series" element={<Home type="series" />} />
            <Route path="watch/:id" element={<Watch />} />
            <Route path="/info/:id" element={<Movie />} />
            <Route path="fav" element={<Favourite />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
