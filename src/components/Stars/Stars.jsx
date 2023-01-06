import React from 'react';
import './stars.css';

const Stars = ({ rating }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <i className='ri-star-fill'></i>
        ) : rating >= number ? (
          <i className='ri-star-half-fill'></i>
        ) : (
          <i className='ri-star-line'></i>
        )}
      </span>
    );
  });
  return (
    <div className='stars'>
      <div className='starts'>{tempStars}</div>
    </div>
  );
};

export default Stars;
