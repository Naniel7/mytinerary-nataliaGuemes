import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Itineraries from '../components/Itineraries';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import citiesActions from '../stores/actions/citiesAction';

export default function CityDetails({ data }) {
    const { id } = useParams();

    const [city, setCities] = useState({})
    useEffect(() => {
        setCities(data.find(item => item._id === id))
    }, [])

    let citiesInStore = useSelector(store => store.citiesReducer.cities);
    console.log(citiesInStore);

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("http://localhost:3000/api/cities/")
            .then((response) => {
                setCities(response.data)
                dispatch(citiesActions.add_cities(response.data))
            })
    }, []);


    const pageStyle = {
        backgroundImage: `url(${city.image})`,
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
        {citiesInStore.map((city, index) => (
            <div className='details-content' key={index}>
                <h2 className='details-title'>{city.place}</h2>
                <h4 className='details-subtitle'>{city.country}</h4>
                <h5 className='details-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas nihil laborum nisi laudantium? Assumenda doloribus, impedit ad debitis doloremque possimus reiciendis, eos numquam, nostrum voluptas blanditiis tempora esse minima.
                    <a className='details-btn nav-link' href="/cities">Back to Cities</a>
                </h5>
            </div>
        ))}
    </div>
    <div><Itineraries /></div>
        </>);
}