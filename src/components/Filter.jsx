/*import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardFilter = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = data.filter(card => {
    const cardText = card.title.toLowerCase();
    return cardText.includes(searchTerm.toLowerCase());
  });

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        {filteredCards.map(card => (
          <Col key={card.id} xs={12} md={4} className="mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.subtitle}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardFilter;*/