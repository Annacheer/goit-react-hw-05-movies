import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieCredits, getMovieDetails, getMovieReviews } from 'api/Api';
import Cast from '../Cast';
import Reviews from '../Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieDetails = await getMovieDetails(movieId);
      const castDetails = await getMovieCredits(movieId);
      const movieReviews = await getMovieReviews(movieId);

      setMovie(movieDetails);
      setCast(castDetails);
      setReviews(movieReviews);
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      <h1>{movie.title}</h1>
      {/* Відображення іншої інформації про фільм */}
      <h2>Cast</h2>
      <Cast cast={cast} />
      <h2>Reviews</h2>
      <Reviews reviews={reviews} />
    </div>
  );
};

export default MovieDetails;
