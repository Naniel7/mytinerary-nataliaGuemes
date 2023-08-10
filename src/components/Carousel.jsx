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
    }, 4000);

    return () => clearTimeout(timer);
  }, [activeIndex, cardGroups]);

  const handleSlideChange = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={activeIndex} onSelect={handleSlideChange}>
        {cardGroups.map((cards, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <div className=" cardStyle d-flex justify-content-between">
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
    </div>
  );
};

export default CarouselCreator;