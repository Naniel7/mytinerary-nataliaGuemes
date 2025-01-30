import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers";
import itinerariesReducer from "./reducers/itinerariesReducers";
import userReducer from "./reducers/userReducers";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    citiesReducer,
    itinerariesReducer,
    userReducer,
    auth: authReducer,
  },
});