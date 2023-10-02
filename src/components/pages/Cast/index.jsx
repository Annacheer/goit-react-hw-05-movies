import React from 'react';

const Cast = ({ cast }) => {
  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
              alt={`${actor.name} Profile`}
            />
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
