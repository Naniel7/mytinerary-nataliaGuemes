import { createAction } from "@reduxjs/toolkit";

const addItineraries = createAction("addItineraries", (array) => {
    return {
        payload: {
            cities: array
        }
    };
});

const itinerariesActions = { addItineraries };

export default itinerariesActions;
