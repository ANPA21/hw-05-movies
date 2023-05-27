import { Link, Outlet } from 'react-router-dom';
import { IMG_PATH } from 'utils/Global';

export const MovieDetails = ({ movie }) => {
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
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
