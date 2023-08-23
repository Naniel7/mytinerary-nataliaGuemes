import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Itineraries from '../components/Itineraries';

export default function CityDetails({ data }) {
    const { id } = useParams();
    const [city, setCity] = useState({})
    useEffect(() => {
        setCity(data.find(item => item._id === id))
    }, [])

    const pageStyle = {
        backgroundImage: `url(${city.image})`,
         display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '80vh',
       
    };

    return (
       <>
       <div className='cities-details' style={pageStyle}>
            <div className='details-content'>
                <h2 className='details-title'>{city.place} </h2>
                <h4 className='details-subtitle'>{city.country}</h4>
                <h5 className='details-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas nihil laborum nisi laudantium? Assumenda doloribus, impedit ad debitis doloremque possimus reiciendis, eos numquam, nostrum voluptas blanditiis tempora esse minima.
                <a className='details-btn' class="nav-link" href="/cities">Back to Cities</a></h5>
            </div>
        </div>
        <div><Itineraries/></div>
   </>  );
}