import React, { useState } from 'react';
import { Navbar, Container, Button, Offcanvas } from 'react-bootstrap';
import "../../styles/style.css";

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <section id="BackgroundBlack">
    <Navbar variant="dark" className='py-4'>
      <Container>
        <Navbar.Brand href="#" id="e-mail-C">chandru08112000@gmail.com</Navbar.Brand>
        <Button onClick={handleToggleOffcanvas} aria-controls="offcanvasNavbar" variant="light" id="Hamburger">
          <svg stroke="black" fill="black" stroke-width="0" viewBox="0 0 512 512" id="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"></path></svg>
        </Button>
      </Container>
      <Offcanvas show={showOffcanvas} onHide={handleToggleOffcanvas} placement="end" className="text-center">
        <Offcanvas.Header closeButton id="background">
          
        </Offcanvas.Header>
        <Offcanvas.Body id="background">
          <ul id="background" className='UlList'>
            <li id="background">Home</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
    </section>
  );
}

export default Header;
