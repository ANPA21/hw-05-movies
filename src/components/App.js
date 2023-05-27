import { Home } from 'pages/Home';
import { MoviePage } from 'pages/MoviePage';
import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<div>MOVIE CAST</div>} />
          <Route path="reviews" element={<div>MOVIE REVIEW</div>} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
};
