import React from "react";
import CityFilter from "../components/Filter";

export default function Cities({ data }) {
  return (
    <>
      <h2></h2>
      <h3 className="cities-text">
        Collection of the most beautiful places and experience
      </h3>
      <CityFilter cities={data} />
    </>
  );
}
