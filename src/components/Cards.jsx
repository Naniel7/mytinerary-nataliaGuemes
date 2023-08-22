import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate  } from 'react-router-dom';

const CardCreator = ({ data }) => {
  const navigate = useNavigate()

  return (
    <Card style={{ width: '18rem' }} onClick={() => navigate(`/cities/${data._id}`)}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.place}</Card.Title>
        <Card.Text>{data.country}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardCreator;