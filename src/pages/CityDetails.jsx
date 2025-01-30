import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { checkAuthState } from "../stores/authSlice"; // Importamos la acción
import PriceIcon from "../components/PriceIcon";
import CreateItinerary from "../components/CreateItinerary";
import { Modal, Button } from "react-bootstrap";

export default function CityDetails({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 🔹 Obtener isLoggedIn desde Redux y asegurarse de que esté actualizado
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [city, setCity] = useState(null);
  const [itineraries, setItineraries] = useState([]);
  const [likedItineraries, setLikedItineraries] = useState({});
  const [showModal, setShowModal] = useState(false);

  // 🔹 Función para alternar el modal
  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(checkAuthState());

    axios
      .get(`http://localhost:3000/api/itineraries/${id}`)
      .then((response) => {
        setItineraries(response.data);

        // Asignamos la ciudad si los datos están disponibles
        const selectedCity = data?.find((item) => item._id === id);
        if (selectedCity) {
          setCity(selectedCity);
        }
      })
      .catch((error) => {
        console.error("Error fetching API data:", error);
      });
  }, [data, id, dispatch]); // 🔹 CIERRE CORRECTO DEL `useEffect`

  const handleLike = (itineraryId) => {
    if (!isLoggedIn || likedItineraries[itineraryId]) return;

    axios
      .post(`http://localhost:3000/api/like/${itineraryId}`)
      .then(() => {
        setLikedItineraries((prev) => ({ ...prev, [itineraryId]: true }));
        setItineraries((prev) =>
          prev.map((itinerary) =>
            itinerary._id === itineraryId
              ? { ...itinerary, likes: itinerary.likes + 1 }
              : itinerary
          )
        );
      })
      .catch((error) => console.error("Error liking itinerary:", error));
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
          {city ? (
            <>
              <h2 className="details-title">{city.place}</h2>
              <h4 className="details-subtitle">{city.country}</h4>
              <h5 className="details-text">{city.info}</h5>
              <a className="call-btn" href="/cities">
                Back to Cities
              </a>
            </>
          ) : (
            <p>Loading city details...</p>
          )}
        </div>
      </div>

      <div className="itineraries-container">
        <h2>Itineraries</h2>
        {itineraries.length > 0 ? (
          itineraries.map((itinerary) => (
            <div className="Itinerary" key={itinerary._id}>
              <p className="itinerary-name">{itinerary.name}</p>
              <div className="itinerary-block">
                <div className="itinerary-info">
                  <div className="itinerary-user">
                    <img src={itinerary.authorPhoto} alt="authorPhoto" />
                    <p>{itinerary.authorName}</p>
                  </div>
                  <p>Hashtags: {itinerary.hashtags.join(", ")}</p>
                  <p>Duration: {itinerary.duration} hours</p>
                  <p>
                    Price: <PriceIcon price={itinerary.price} />
                  </p>
                  <p>Likes: {itinerary.likes}</p>
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
          ))
        ) : (
          <p>No itineraries available for this city.</p>
        )}
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
                axios
                  .post("http://localhost:3000/api/itineraries", newItinerary)
                  .then((response) => {
                    setItineraries((prev) => [...prev, response.data]);
                    toggleModal();
                  })
                  .catch((error) =>
                    console.error("Error creating itinerary:", error)
                  );
              }}
            />
          ) : (
            <div>
              <p>You need to be logged in to create an itinerary.</p>
              <Button variant="primary" onClick={() => navigate("/register")}>
                Go to Register
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
