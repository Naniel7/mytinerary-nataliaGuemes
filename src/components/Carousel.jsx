import React from 'react'
import { Carousel } from 'react-bootstrap';
import CardCreator from './Cards';
import data from '../data.json'


const CarouselCreator = () => {
  console.log(data);
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex justify-content-between">
          {
            data.map((card, index) =>
              <CardCreator image={card.image} title={card.city} subtitle={card.country} key={index} />
            )
          }

        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselCreator;