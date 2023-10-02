import React from 'react';

const Cast = ({ cast }) => {
  return (
    <div>
      <h1>Cast</h1>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
