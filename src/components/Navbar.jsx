import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavigationBar = ({ login }) => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Link to="/cities" className="nav-link">
            Cities
          </Link>
          {!login && (
            <Button className="log-btn" variant="info">
              <Link to="/login" className="nav-link">
                <BsFillPersonFill className="mr-1 bg-transparent" /> Log In{" "}
                <i className="bi bi-person-fill"></i>
              </Link>
            </Button>
          )}
          {login && (
            <Button
              className="log-btn btn-danger"
              variant="info"
              onClick={() => handleLogOut()}
            >
              Log Out
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
