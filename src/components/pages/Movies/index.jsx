import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchResults from '../SearchResults';
import { searchMovies } from 'api/Api';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const results = await searchMovies(query);
        setSearchResults(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  const handleSearchSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    setSearchParams({ search: e.target.elements.query.value });
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <div>
          <h1>Search Movies</h1>
          <input
            type="text"
            // onChange={e => setSearchParams({ search: e.target.value })}
            name="query"
          />
          <button type="submit">Search</button>
        </div>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {searchResults.length > 0 && <SearchResults results={searchResults} />}
    </div>
  );
};

export default Movies;
