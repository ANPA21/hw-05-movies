import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Cast = lazy(() => import('./Cast/Cast'));
const Home = lazy(() => import('../pages/Home'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MoviePage = lazy(() => import('../pages/MoviePage'));
const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  );
};
