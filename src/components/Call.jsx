import React from 'react';
import { Link } from 'react-router-dom';
const CallToAction = () => {
  return (
    <Link to={"/cities"}>
      <button className='call-btn'>
        Click to Arrive Your Dream Destination
      </button>
    </Link>
  );
};

export default CallToAction;