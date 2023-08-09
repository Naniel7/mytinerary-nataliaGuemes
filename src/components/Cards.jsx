import React from 'react'
import Card from 'react-bootstrap/Card'

let CardCreator = ({image,title,subtitle}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{subtitle}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardCreator;