import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'utils/api';
import { IMG_PATH, IMG_NOT_FOUND } from 'utils/Global';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function getCast() {
      try {
        setLoading(true);
        setError(false);
        const fetchedCast = await getMovieCast(movieId, controller.signal);
        setMovieCast(fetchedCast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getCast();
    return () => controller.abort;
  }, [movieId]);
  return (
    <div>
      {error && <div>Something went wrong, try again.</div>}
      {loading && <div>Movies are loading, please wait.</div>}
      {movieCast &&
        movieCast.cast
          .slice(0, 10)
          .map(({ id, name, profile_path, character }) => (
            <div key={id}>
              <img
                src={
                  profile_path
                    ? `${IMG_PATH}${profile_path}`
                    : `${IMG_NOT_FOUND}`
                }
                alt={name}
                width="200"
              />
              <h1>{name}</h1>
              <p>Character: {character}</p>
            </div>
          ))}
    </div>
  );
};

export default Cast;
