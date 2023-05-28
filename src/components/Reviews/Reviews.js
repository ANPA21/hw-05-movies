import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'utils/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, SetError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function getReviews() {
      try {
        setLoading(true);
        SetError(false);
        const fetchedReviews = await getMovieReviews(
          movieId,
          controller.signal
        );
        setMovieReviews(fetchedReviews);
      } catch (error) {
        SetError(true);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
    return () => controller.abort;
  }, [movieId]);
  return (
    <div>
      {error && <div>Something went wrong, try again.</div>}
      {loading && <div>Movies are loading, please wait.</div>}
      {movieReviews.length === 0 && <div>There are no reviews yet.</div>}
      {movieReviews.length !== 0 &&
        movieReviews.map(review => (
          <div key={review.id}>
            <p>{`Author: ${review.author}`}</p>
            <span>{review.content}</span>
          </div>
        ))}
    </div>
  );
};
export default Reviews;
