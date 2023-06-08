import { useEffect, useState } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { getMoviesByQuery } from 'utils/api';
import { MovieList } from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get('query');

  const handleSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
    setMovies([]);
    setError(null);
  };
  useEffect(() => {
    const controller = new AbortController();
    async function getMovies() {
      try {
        setLoading(true);
        if (urlQuery) {
          const fetchedMovies = await getMoviesByQuery(
            urlQuery,
            controller.signal
          );
          setMovies(fetchedMovies);
        }
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
    return () => controller.abort();
  }, [urlQuery]);
  return (
    <div>
      <Searchbar onSubmit={handleSubmit} value={urlQuery} />
      {error && <div>Something went wrong, try again.</div>}
      {loading && <div>Movies are loading, please wait.</div>}
      {urlQuery && <MovieList movies={movies} />}
    </div>
  );
};
export default Movies;
