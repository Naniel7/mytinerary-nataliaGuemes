import React from 'react';
import { useNavigate } from 'react-router-dom';


const CardCreator = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="custom-card" onClick={() => navigate(`/cities/${data._id}`)}>
      <div
        className="card-background"
        style={{ backgroundImage: `url(${data.image})` }}
      >
      </div> <div className="card-content">
          <h2 className="card-title">{data.place}</h2>
          <p className="card-text">{data.country}</p>
        </div>
    </div>
  );
};

export default CardCreator;
