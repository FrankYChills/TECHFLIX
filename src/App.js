import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Movie from "./pages/movie/Movie";

function App() {
  const user = true;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={!user ? <Login /> : <Home />} />
        <Route path="/register" element={!user ? <Register /> : <Home />} />

        {user && (
          <>
            {" "}
            <Route path="movies" element={<Home type="movie" />} />
            <Route path="series" element={<Home type="series" />} />
            <Route path="watch/:id" element={<Watch />} />
            <Route path="/info/:id" element={<Movie />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
