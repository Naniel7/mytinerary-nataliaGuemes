import React from 'react';

const itineraries = ({ itineraries }) => {
  if (!itineraries) {
    return <div>Loading...</div>;
  }

  const { authorName, price, duration, likes, hashtags } = itineraries;

  return (
    <div className="itineraries">
      <h2>{authorName}</h2>
      <p>Price: {price}</p>
      <p>Duration: {duration} hours</p>
      <p>Likes: {likes}</p>
      <p>Hashtags: {hashtags.join(', ')}</p>
    </div>
  );
};

export default itineraries;