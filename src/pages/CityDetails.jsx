import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import citiesActions from "../stores/actions/citiesAction";
import itinerariesActions from "../stores/actions/itinerariesActions";
import PriceIcon from "../components/PriceIcon";
import Itineraries from "../components/Itinerary";

export default function CityDetails({ data }) {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [city, setCity] = useState(null);
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const selectedCity = data.find((item) => item._id === id);
    setCity(selectedCity);

    axios
      .get(`http://localhost:3000/api/itineraries/${id}`)
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

  const handleNewItinerary = (newItinerary) => {
    setItineraries((prevItineraries) => [...prevItineraries, newItinerary]);
    // Opcional: Enviar el nuevo itinerario al backend
    axios
      .post(`http://localhost:3000/api/itineraries/${id}`, newItinerary)
      .then((response) => {
        console.log("Itinerary saved:", response.data);
      })
      .catch((error) => {
        console.error("Error saving itinerary:", error);
      });
  };

  const pageStyle = {
    backgroundImage: city ? `url(${city.image})` : "",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <>
      <div className="cities-details" style={pageStyle}>
        <div className="details-content d-flex">
          {city && (
            <>
              <h2 className="details-title">{city.place}</h2>
              <h4 className="details-subtitle">{city.country}</h4>
              <h5 className="details-text d-flex">
                {city.info}
                <div className="details-btn">
                  <a className="call-btn" href="/cities">
                    Back to Cities
                  </a>
                </div>
              </h5>
            </>
          )}
        </div>
      </div>

      <div className="itineraries-container">
        <h2>Itineraries</h2>

        {/* Renderizar el formulario para crear itinerarios */}
        <Itineraries
          onSubmit={handleNewItinerary}
          defaultAuthorName="Default Author"
          isLoggedIn={true} // Cambiar según el estado real de autenticación
        />

        {/* Renderizar los itinerarios existentes */}
        {itineraries.map((itinerary) => (
          <div className="Itinerary" key={itinerary._id}>
            <p className="itinerary-name">{itinerary.name}</p>
            <div className="itinerary-block">
              <div className="itinerary-info">
                <div className="itinerary-user">
                  <img src={itinerary.authorPhoto} alt="authorPhoto" />
                  <p>
                    <div className="div-title"></div> {itinerary.authorName}
                  </p>
                </div>
                <div className="itinerary-hashtag">
                  <p>
                    <div className="div-title">Hashtags: </div>
                    {itinerary.hashtags.join(", ")}
                  </p>
                </div>
                <div className="itinerary-duration">
                  <p>
                    <div className="div-title">Duration:</div>{" "}
                    {itinerary.duration} hours
                  </p>
                </div>
                <div className="itinerary-price">
                  <p>
                    <div className="div-title">Price:</div>{" "}
                    <PriceIcon price={itinerary.price} />
                  </p>
                </div>
                <div className="itinerary-likes">
                  <p>Likes: {itinerary.likes}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
