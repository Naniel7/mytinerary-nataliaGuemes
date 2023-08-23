import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CityDetails({ data }) {
    const { id } = useParams();
    const [city, setCity] = useState({})
    useEffect(() => {
        setCity(data.find(item => item._id === id))
    }, [])

    return (
        <div className='cities-cards'>
            <h2 className='details-title'>{city.place}</h2>
            <h4 className='details-subtitle'>{city.country}</h4>
            <h5 className='details-text'></h5>
            <img src={city.image} alt="" />
        </div>
    );
}
