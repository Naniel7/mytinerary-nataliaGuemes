import React, { useState } from 'react';
import CardCreator from './Cards';

const CityFilter = ({ cities }) => {
  const [filterText, setFilterText] = useState('');

  const filteredCities = cities.map(item => item.place).filter(city =>
    city.toLowerCase().startsWith(filterText.trim().toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        placeholder="Find your next destination..."
      />
      {cities.filter(item => filteredCities.includes(item.place)).map(city => (
        <CardCreator
        image={city.image}
        place={city.place}
        country={city.country}
        key={city.id} 
        />
      ))}
    </div>
  );
};


export default CityFilter;