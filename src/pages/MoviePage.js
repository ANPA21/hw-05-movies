import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieImages } from 'utils/api';

export const MoviePage = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        const fetchedMovieDetais = await getMovieDetails(movieId);
        setMovie(fetchedMovieDetais);
      } catch (error) {}
    }
    getMovie();
  }, []);

  return <div>{movie && <MovieDetails movie={movie} />}</div>;
};
