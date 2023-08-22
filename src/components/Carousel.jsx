import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import CardCreator from './Cards';

const CarouselCreator = ({ data }) => {
  const slideSize = 4;
  const [activeIndex, setActiveIndex] = useState(0);

  const limitedData = data.slice(0, 12);

  const cardGroups = [];
  for (let i = 0; i < limitedData.length; i += slideSize) {
    cardGroups.push(limitedData.slice(i, i + slideSize));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardGroups.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeIndex, cardGroups]);

  const handleSlideChange = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <div className='cs-text'><h4>Popular Mytineraries</h4></div>
      <div>
        <Carousel activeIndex={activeIndex} onSelect={handleSlideChange} controls={false}>
          {cardGroups.map((cards, groupIndex) => (
            <Carousel.Item key={groupIndex}>
              <div className=" cardStyle d-flex justify-content-between">
                {cards.map((card, cardIndex) => (
                  <CardCreator data={card} key={cardIndex} />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselCreator;