import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'utils/api';
import { IMG_PATH } from 'utils/Global';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [error, SetError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function getCast() {
      try {
        setLoading(true);
        SetError(false);
        const fetchedCast = await getMovieCast(movieId, controller.signal);
        setMovieCast(fetchedCast);
      } catch (error) {
        SetError(true);
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
        movieCast.cast.slice(0, 10).map(actor => (
          <div key={actor.id}>
            <img
              src={`${IMG_PATH}${actor.profile_path}`}
              alt={actor.name}
              width="200px"
            />
            <h1>{actor.name}</h1>
            <p>Character: {actor.character}</p>
          </div>
        ))}
    </div>
  );
};
