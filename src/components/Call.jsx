import React from 'react';
import { Link } from 'react-router-dom';
const CallToAction = () => {
  return (
    <Link to={"/cities"}>
      <button className='call-btn'>
      Explore Your Adventure
      </button>
    </Link>
  );
};

export default CallToAction;