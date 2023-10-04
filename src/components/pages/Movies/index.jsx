import React, { useState } from 'react';

import { Link, useSearchParams } from 'react-router-dom';

const FormSearchProducts = ({ submit }) => {
  //   const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const query = searchParams.get('search');

  const handleChange = ({ target: { value } }) => {
    // setValue(value);
    setSearchParams({ search: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    submit(query);
  };

  //   useEffect(() => {
  //     setSearchParams({ search: 'qwerty' });
  //   }, [setSearchParams]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Search Movies</h1>
        <input type="text" value={query} onChange={handleChange} />
        <button>Search</button>

        <ul>
          {results.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default FormSearchProducts;
