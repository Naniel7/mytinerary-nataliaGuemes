import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import citiesActions from '../stores/actions/citiesAction';
import itinerariesActions from '../stores/actions/itinerariesActions';
//import itienerary

export default function CityDetails({ data }) {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [city, setCity] = useState(null);

    useEffect(() => {
        const selectedCity = data.find(item => item._id === id);
        setCity(selectedCity);

        axios.get("http://localhost:3000/api/cities/")
            .then((response) => {
                dispatch(citiesActions.add_cities(response.data));
            })
            .catch((error) => {
                console.error("Error to get API data:", error);
            });
        
        const itinerariesData = [];
        dispatch(itinerariesActions.addItineraries(itinerariesData));
    }, [data, id, dispatch]);


    const pageStyle = {
        backgroundImage: city ? `url(${city.image})` : '',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
    };

    return (
        <>
            <div className='cities-details' style={pageStyle}>
                <div className='details-content'>
                    {city && ( 
                        <>
                            <h2 className='details-title'>{city.place}</h2>
                            <h4 className='details-subtitle'>{city.country}</h4>
                            <h5 className='details-text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas nihil laborum nisi laudantium? Assumenda doloribus, impedit ad debitis doloremque possimus reiciendis, eos numquam, nostrum voluptas blanditiis tempora esse minima.
                                <a className='details-btn nav-link' href="/cities">Back to Cities</a>
                            </h5>
                        </>
                    )}
                </div>
            </div>
            {/* <Itineraries /> */}
        </>
    );
}
