import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
