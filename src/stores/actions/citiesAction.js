/*import axios from 'axios';

export const fetchCities = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/api/cities');
      dispatch({ type: 'FETCH_CITIES_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_CITIES_FAILURE', payload: error.message });
    }
  };
};*/


import { createAction } from "@reduxjs/toolkit";

const add_cities = createAction("add_cities", (array) => {
    return {
        payload: {
            cities: array
        }
    };
});

const citiesActions = { add_cities };

export default citiesActions;