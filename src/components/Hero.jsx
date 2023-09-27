import React from "react";
import Call from "./Call";
import { Button } from "react-bootstrap";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero">
          <div className="hero-text">
           <Call />
          </div>
        </div>
        <div className="call-container">
         
        </div>
      </div>
    </>
  );
}
