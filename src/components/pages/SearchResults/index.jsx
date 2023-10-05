import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieLink = ({ movie }) => {
  const location = useLocation();

  return (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.title}
      </Link>
    </li>
  );
};

const SearchResults = ({ results }) => {
  return (
    <ul>
      {results.map(movie => (
        <MovieLink key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default SearchResults;
