import { useEffect, useRef, useState, lazy } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { getMovieDetails } from 'utils/api';
const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails')
);

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [error, SetError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const fromRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const controller = new AbortController();
    async function getMovie() {
      try {
        setLoading(true);
        SetError(false);
        const fetchedMovieDetais = await getMovieDetails(
          movieId,
          controller.signal
        );
        setMovie(fetchedMovieDetais);
      } catch (error) {
        SetError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
    return () => controller.abort;
  }, [movieId]);

  return (
    <div>
      <Link to={fromRef.current}>Go Back</Link>
      {error && <div>Something went wrong, try again.</div>}
      {loading && <div>Movies are loading, please wait.</div>}
      {movie && <MovieDetails movie={movie} />}
    </div>
  );
};

export default MoviePage;
