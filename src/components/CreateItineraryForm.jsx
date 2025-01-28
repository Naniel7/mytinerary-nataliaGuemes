import React from "react";
import Itineraries from "./Itineraries";

function App() {
  const handleItinerarySubmit = (itinerary) => {
    console.log("New itinerary:", itinerary);
  };

  return (
    <Itineraries
      onSubmit={handleItinerarySubmit}
      defaultAuthorName="John Doe"
      isLoggedIn={true}
    />
  );
}

export default App;
