import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/citiesAction";

const initialState = {
  cities: [
    {
      place: "",
      country: "",
      image: ""
    }
  ]
}

const citiesReducer = createReducer(initialState, (builder) => {
  return builder.addCase(citiesActions.add_cities, (state, action) => {
    const newState = { ...state, cities: action.payload.cities }
    return  newState
  })
})

export default citiesReducer