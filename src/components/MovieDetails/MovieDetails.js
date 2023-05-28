import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IMG_PATH, IMG_NOT_FOUND } from 'utils/Global';

const MovieDetails = ({
  movie: { poster_path, title, vote_average, overview, genres },
  from,
}) => {
  return (
    <div>
      <img
        src={poster_path ? `${IMG_PATH}${poster_path}` : `${IMG_NOT_FOUND}`}
        alt="title"
        width="500px"
      />
      <div>
        <h1>{title}</h1>
        <p>User Rating {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(genre => `${genre.name}  `)}</p>
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
