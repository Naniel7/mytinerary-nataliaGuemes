import { createReducer } from "@reduxjs/toolkit";
import itinerariesActions from "../actions/itinerariesActions";

const initialState = {
  itineraries: [
    {
      place: "",
      country: "",
      image: ""
    }
  ]
}

const itinerariesReducer = createReducer(initialState, (builder) => {
    return builder.addCase(itinerariesActions.add_itineraries, (state, action) => {
      const newState = { ...state, itineraries: action.payload.itineraries }
      return newState;
    });
  });

export default itinerariesReducer