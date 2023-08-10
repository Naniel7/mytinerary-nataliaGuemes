import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Link to="/cities" className="nav-link">Cities</Link>
          <Button className="log-btn" variant="info">
            <BsFillPersonFill className="mr-1 bg-transparent" /> Log In {<i className="bi bi-person-fill"></i>}
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;


/* function Navbar() {
  const data = [
    { url: "#", content: "Home" },
    { url: "Cities.jsx", content: "Cities" }
  ]

  return (
    <nav>
      <Anchor />
      {data.map((element, index) => <Anchor key={index} url={element.url} content={element.content} />)}
      <button> 
        <div className='LogIcon'><Icon/></div>
      Login</button>
    
    </nav>
  )
}

export default Navbar */