import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter , BsInstagram, BsWhatsapp } from "react-icons/bs";


export default function Footer() {
  return (
    <>
      <footer>
        <div className="links-container">
      
          <div className="d-flex footer-links">
            <Link to={"/"}>
              <p>Home</p>
            </Link>
            <Link to={"/cities"}>
              <p>Cities</p>
            </Link>
          </div>
        </div>

        <div className="sm-container">
          <BsInstagram className="mr-1 bg-transparent" />
          <BsTwitter  className="mr-1 bg-transparent" />
          <BsWhatsapp className="mr-1 bg-transparent" />
    
        </div>
      </footer>
    </>
  );
}
