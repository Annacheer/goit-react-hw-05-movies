import React, { useState } from 'react';
import { searchMovies } from 'api/Api';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const searchResults = await searchMovies(query);
    setResults(searchResults);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
