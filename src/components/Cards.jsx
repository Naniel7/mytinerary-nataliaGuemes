import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';


let CardCreator = ({ place, country, image }) => {


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{place}</Card.Title>
        <Card.Text>{country}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardCreator;
