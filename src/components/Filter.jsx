import React, { useState } from 'react';
import CardCreator from './Cards';

const CityFilter = ({ cities }) => {
  const [filterText, setFilterText] = useState('');

  const filteredCities = cities.map(item => item.place).filter(city =>
    city.toLowerCase().includes(filterText.trim().toLowerCase())
  );

  return (
    <div className='filter-container'>
      <div className='filter-input'><input
        type="text"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        placeholder="Find your next destination..."
      /></div>
      <div className='filter-cards'>
        {cities.filter(item => filteredCities.includes(item.place)).map((city, index) => (
          <CardCreator data={city} key={index} />
        ))}</div>
    </div>
  );
};

export default CityFilter;