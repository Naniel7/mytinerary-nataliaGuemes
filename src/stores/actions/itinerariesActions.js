import { createAction } from "@reduxjs/toolkit";

const add_itineraries = createAction("add_itineraries", (array) => {
    return {
        payload: {
            itineraries: array
        }
    };
});

const itinerariesActions = { add_itineraries };

export default itinerariesActions;