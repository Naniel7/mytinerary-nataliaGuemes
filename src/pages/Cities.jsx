import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import CardCreator from '../components/Carousel'; 


const CarouselCreator = ({ data }) => {
  const chunkSize = 4; 
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const cardGroups = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    cardGroups.push(data.slice(i, i + chunkSize));
  }

  return (
    <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
      {cardGroups.map((cards, groupIndex) => (
        <Carousel.Item key={groupIndex}>
          <div className="d-flex justify-content-between">
            {cards.map((card, cardIndex) => (
              <CardCreator
                image={card.image}
                title={card.place}
                subtitle={card.country}
                key={cardIndex}
              />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselCreator;