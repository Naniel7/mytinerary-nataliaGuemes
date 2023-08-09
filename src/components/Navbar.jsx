import React from 'react'
import Anchor from './Anchors'
import { Navbar, Nav, Button} from 'react-bootstrap';


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

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="cities.jsx">Cities</Nav.Link>
          <Button>Log In</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;