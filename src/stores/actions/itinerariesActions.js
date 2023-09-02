import axios from 'axios';


export const fetchItineraries = (cityId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/itineraries/${cityId}`);
      dispatch({ type: 'FETCH_ITINERARIES_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_ITINERARIES_FAILURE', payload: error.message });
    }
  };
};
