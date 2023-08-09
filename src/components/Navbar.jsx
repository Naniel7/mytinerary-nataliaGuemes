import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BsFillPersonFill } from 'react-icons/bs';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="cities.jsx">Cities</Nav.Link>
          <Button className= "log-btn" variant="info">
            <BsFillPersonFill className="mr-1 bg-transparent"/> Log In {<i class="bi bi-person-fill"></i>}
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