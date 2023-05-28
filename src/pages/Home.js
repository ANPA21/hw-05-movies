import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getMovies } from 'utils/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, SetError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function getTrending() {
      try {
        setLoading(true);
        SetError(false);
        const fetchedMovies = await getMovies(controller.signal);
        setTrendingMovies(fetchedMovies);
      } catch (error) {
        SetError(true);
      } finally {
        setLoading(false);
      }
    }
    getTrending();

    return () => controller.abort;
  }, []);

  return (
    <main>
      <h1>Trending movies</h1>
      {error && <div>Something went wrong, try again.</div>}
      {loading && <div>Movies are loading, please wait.</div>}
      <MovieList movies={trendingMovies}></MovieList>
    </main>
  );
};
export default Home;
