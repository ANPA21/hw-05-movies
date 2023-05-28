import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'utils/api';

export const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [error, SetError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

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
      {error && <div>Something went wrong, try again.</div>}
      {loading && <div>Movies are loading, please wait.</div>}
      {movie && <MovieDetails movie={movie} />}
    </div>
  );
};
