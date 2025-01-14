import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";

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
          <a 
            href="https://www.linkedin.com/in/natalia-g%C3%BCemes-duarte-2b1783184/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <BsLinkedin className="mr-1 bg-transparent" />
          </a>
          <a 
            href="https://github.com/Naniel7" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <BsGithub className="mr-1 bg-transparent" />
          </a>
        </div>
      </footer>
    </>
  );
}
