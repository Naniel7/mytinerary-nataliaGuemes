import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import citiesActions from '../stores/actions/citiesAction';
import itinerariesActions from '../stores/actions/itinerariesActions';
import PriceIcon from '../components/PriceIcon';
import Accordion from 'react-bootstrap/Accordion';
import { BsTools } from 'react-icons/bs';

export default function CityDetails({ data }) {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [city, setCity] = useState(null);
    const [itineraries, setItineraries] = useState([]);

    useEffect(() => {
        const selectedCity = data.find(item => item._id === id);
        setCity(selectedCity);

        axios.get(`http://localhost:3000/api/itineraries/${id}`)
            .then((response) => {
                console.log(response);
                dispatch(citiesActions.add_cities(response.data));
                setItineraries(response.data);
            })
            .catch((error) => {
                console.error("Error to get API data:", error);
            });

        const itinerariesData = [];
        dispatch(itinerariesActions.add_itineraries(itinerariesData));
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

            <div className="itineraries-container">
                <h2>Itineraries</h2>

                {itineraries.map((itinerary) => (
                    <div className='Itinerary' key={itinerary._id}>
                        <p className='itinerary-name'>{itinerary.name}</p>
                        <div className='itinerary-block'>
                            <p>Likes: {itinerary.likes}</p>

                            <div className='itinerary-info'>
                                <div className='itinerary-user'>
                                    <p><div className='div-title'>User:</div> {itinerary.authorName}</p>
                                    <img src={itinerary.authorPhoto} alt="authorPhoto" />
                                </div>
                                <div className='itinerary-hashtag'>
                                    <p><div className='div-title'>Hashtags: </div>
                                        {itinerary.hashtags.join(', ')}</p>
                                </div>
                                <div className='itinerary-duration'>
                                    <p><div className='div-title'>Duration:</div> {itinerary.duration} hours</p>
                                </div>
                                <div className='itinerary-price'>
                                    <p><div className='div-title'>Price:</div> <PriceIcon price={itinerary.price} /></p>

                                </div>
                            </div>
                            <div className='itinerary-button'>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>View More</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='accordeon-content'>  <BsTools />
                                        <p>UNDER CONSTRUCTION</p></div>
                                      
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    );
}
