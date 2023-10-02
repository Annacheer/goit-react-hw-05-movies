import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>{review.content}</li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
