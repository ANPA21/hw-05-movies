import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, name, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>{name || title}</Link>
        </li>
      ))}
    </ul>
  );
};
