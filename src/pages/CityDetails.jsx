import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import citiesActions from '../stores/actions/citiesAction';
import Itineraries from '../components/Itineraries';

export default function CityDetails({ data }) {
    const { id } = useParams();
    const dispatch = useDispatch();

    // State para la información de la ciudad seleccionada
    const [city, setCity] = useState({});
    
    useEffect(() => {
        // Buscar la ciudad por ID en los datos proporcionados
        const selectedCity = data.find(item => item._id === id);
        setCity(selectedCity);

        // Obtener datos de las ciudades desde la API y almacenarlos en la tienda Redux (si es necesario)
        axios.get("http://localhost:3000/api/cities/")
            .then((response) => {
                dispatch(citiesActions.add_cities(response.data));
            })
            .catch((error) => {
                console.error("Error al obtener datos de la API:", error);
            });
    }, [data, id, dispatch]);

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
                <div className='details-content'>
                    <h2 className='details-title'>{city.place}</h2>
                    <h4 className='details-subtitle'>{city.country}</h4>
                    <h5 className='details-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas nihil laborum nisi laudantium? Assumenda doloribus, impedit ad debitis doloremque possimus reiciendis, eos numquam, nostrum voluptas blanditiis tempora esse minima.
                        <a className='details-btn nav-link' href="/cities">Back to Cities</a>
                    </h5>
                </div>
            </div>
            <div><Itineraries /></div>
        </>
    );
}