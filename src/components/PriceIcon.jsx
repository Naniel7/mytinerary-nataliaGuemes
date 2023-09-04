import React from 'react';
import { BsCash } from 'react-icons/bs';

const PriceIcon = ({ price }) => {
  const iconElements = Array.from({ length: price }, (_, index) => (
    <BsCash key={index} /> 
  ));

  return <>{iconElements}</>;
};

export default PriceIcon;
