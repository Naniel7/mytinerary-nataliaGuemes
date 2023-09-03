import React from 'react';

const PriceIcon = ({ price }) => {
  const iconClass = 'bi bi-cash'

  const iconElements = Array.from({ length: price }, (_, index) => (
    <i key={index} className={iconClass}></i>
  ));

  return <>{iconElements}</>;
};

export default PriceIcon;