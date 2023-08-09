import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import CardCreator from './Cards';
import data from '../data.json';

const CarouselCreator = () => {
  const slideSize = 4;
  const [activeIndex, setActiveIndex] = useState(0);

  const cardGroups = [];
  for (let i = 0; i < data.length; i += slideSize) {
    cardGroups.push(data.slice(i, i + slideSize));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardGroups.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeIndex, cardGroups]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cardGroups.length) % cardGroups.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardGroups.length);
  };

  return (
    <div>
      <Carousel activeIndex={activeIndex} onSelect={() => {}}>
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
      <div className="d-flex justify-content-center mt-3">
        <Button variant="outline-primary" onClick={handlePrev}>
          Anterior
        </Button>
        <Button variant="outline-primary" onClick={handleNext} className="ml-3">
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default CarouselCreator;

