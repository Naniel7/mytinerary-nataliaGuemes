import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import citiesActions from "../stores/actions/citiesAction";
import itinerariesActions from "../stores/actions/itinerariesActions";
import PriceIcon from "../components/PriceIcon";
import CreateItinerary from "../components/CreateItinerary";
import { Modal, Button } from "react-bootstrap";

export default function CityDetails({ data, isLoggedIn }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [city, setCity] = useState(null);
  const [itineraries, setItineraries] = useState([]);
  const [likedItineraries, setLikedItineraries] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const selectedCity = data.find((item) => item._id === id);
    setCity(selectedCity);

    axios
      .get(`http://localhost:3000/api/itineraries/${id}`)
      .then((response) => {
        dispatch(citiesActions.add_cities(response.data));
        setItineraries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching API data:", error);
      });

    const itinerariesData = [];
    dispatch(itinerariesActions.add_itineraries(itinerariesData));
  }, [data, id, dispatch]);

  const handleLike = (itineraryId) => {
    if (isLoggedIn && !likedItineraries[itineraryId]) {
      setLikedItineraries((prev) => ({ ...prev, [itineraryId]: true }));
      setItineraries((prevItineraries) =>
        prevItineraries.map((itinerary) =>
          itinerary._id === itineraryId
            ? { ...itinerary, likes: itinerary.likes + 1 }
            : itinerary
        )
      );
    }
  };

  const toggleModal = () => setShowModal(!showModal);

  const handleSignUpRedirect = () => {
    navigate("/signup"); // Redirige al formulario de registro
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
              <div className="itinerary-buttons">
                <button
                  onClick={() => handleLike(itinerary._id)}
                  disabled={!isLoggedIn || likedItineraries[itinerary._id]}
                >
                  Like
                </button>
                <button onClick={toggleModal}>Create Itinerary</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={toggleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {isLoggedIn ? "Create New Itinerary" : "Not Logged In"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoggedIn ? (
            <CreateItinerary
              onSubmit={(newItinerary) => {
                setItineraries((prevItineraries) => [
                  ...prevItineraries,
                  newItinerary,
                ]);
                toggleModal();
              }}
            />
          ) : (
            <div>
              <p>You need to be logged in to create an itinerary.</p>
              <Button variant="primary" onClick={() => navigate("/login")}>
  Go to Log In
</Button>

            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
