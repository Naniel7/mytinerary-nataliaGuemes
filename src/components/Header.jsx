import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function Header({ login }) {
  return (
    <header>
      <Link to={"/"}>
        <div className="logo">
          <img className="icon" src="https://i.imgur.com/8d2dSKS.png" alt="" />
          <img src="https://i.imgur.com/HsgGSYP.png" alt="title" srcset="" />
        </div>
      </Link>

      <Navbar login={login} />
    </header>
  );
}
export default Header;
