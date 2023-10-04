import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { getMovieCredits, getMovieDetails, getMovieReviews } from 'api/Api';
import Cast from '../Cast';
import Reviews from '../Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isCastVisible, setIsCastVisible] = useState(false);
  const [areReviewsVisible, setAreReviewsVisible] = useState(false);

  const location = useLocation();

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

  const toggleCastVisibility = () => {
    setIsCastVisible(!isCastVisible);
    setAreReviewsVisible(false);
  };

  const toggleReviewsVisibility = () => {
    setAreReviewsVisible(!areReviewsVisible);
    setIsCastVisible(false);
  };

  const castContainer = isCastVisible
    ? createPortal(<Cast cast={cast} />, document.getElementById('cast-portal'))
    : null;

  const reviewsContainer = areReviewsVisible
    ? createPortal(
        <Reviews reviews={reviews} />,
        document.getElementById('reviews-portal')
      )
    : null;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
      <h1>{movie.title}</h1>
      <p>User Score: {movie.vote_average}</p>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h2>Genres</h2>
      <ul>
        <p>Additional information</p>
        <li>
          <Link to="#" onClick={toggleCastVisibility}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="#" onClick={toggleReviewsVisibility}>
            Reviews
          </Link>
        </li>
      </ul>

      <div id="cast-portal">{castContainer}</div>
      <div id="reviews-portal">{reviewsContainer}</div>
    </div>
  );
};

export default MovieDetails;
