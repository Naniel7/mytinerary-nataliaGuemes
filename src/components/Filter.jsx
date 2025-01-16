import React, { useState } from 'react';
import CardCreator from './Cards';

const CityFilter = ({ cities }) => {
  const [filterText, setFilterText] = useState('');

  // Filtrar las ciudades considerando 'place' y 'country'
  const filteredCities = cities.filter(item =>
    item.place.toLowerCase().includes(filterText.trim().toLowerCase()) ||
    item.country.toLowerCase().includes(filterText.trim().toLowerCase())
  );

  return (
    <div className='filter-container'>
      <div className='filter-input'>
        <input
          type="text"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          placeholder="Find your next destination..."
        />
      </div>
      <div className='filter-cards'>
        {filteredCities.map((city, index) => (
          <CardCreator data={city} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CityFilter;
