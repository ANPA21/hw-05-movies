import { Link, Outlet } from 'react-router-dom';

export const MoviePage = () => {
  return (
    <div>
      <h1>Movie Title</h1>
      <p>eqwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
