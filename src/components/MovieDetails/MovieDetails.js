import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IMG_PATH } from 'utils/Global';

const MovieDetails = ({ movie, from }) => {
  return (
    <div>
      <img src={`${IMG_PATH}${movie.poster_path}`} alt="" width="500px" />
      <div>
        <h1>{movie.title}</h1>
        <p>User Rating {movie.vote_average}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map(genre => `${genre.name}  `)}</p>
      </div>

      <div>
        <p>Additional Information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading additional information</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
