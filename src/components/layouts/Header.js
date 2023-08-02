import React, { useState, useEffect } from "react";
import { Navbar, Container, Button, Offcanvas } from "react-bootstrap";
import "../../styles/style.css";

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isTop, setIsTop] = useState(true);

  // Function to handle scrolling and update isTop state accordingly
  const handleScroll = () => {
    const isOnTop = window.scrollY === 0;
    setIsTop(isOnTop);
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <section id={isTop ? "BackgroundBlack" : "BackgroundWhite"} className="sticky-top">
      <Navbar variant={isTop ? "dark" : "light"} className="py-3">
        <Container>
          <Navbar.Brand href="mailto:chandru08112000@gmail.com" target="_blank" rel="noreferrer" id="e-mail-C">
            chandru08112000@gmail.com
          </Navbar.Brand>

          <Button
            onClick={handleToggleOffcanvas}
            aria-controls="offcanvasNavbar"
            variant={isTop ? "light" : "dark"}
            id="Hamburger"
          >
            <svg
              stroke={isTop ? "black" : "white"}
              fill={isTop ? "black" : "white"}
              strokeWidth="0"
              viewBox="0 0 512 512"
              id="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"></path>
            </svg>
          </Button>
        </Container>
        <Offcanvas
          show={showOffcanvas}
          onHide={handleToggleOffcanvas}
          placement="end"
          className="text-center"
        >
          {/* For close button  */}
          <Offcanvas.Header closeButton id={isTop ? "background" : "backgroundWhite"}> 
          </Offcanvas.Header>
          <Offcanvas.Body id={isTop ? "background" : "backgroundWhite"}>
            <ul id={isTop ? "background" : "backgroundWhite"} className="UlList">
              <li>Home</li>
              <li>About</li>
              <li>Experience</li>
              <li>Portfolio</li>
              <li>My Services</li>
              <li>Blogs</li>
              <li>Contact us</li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </section>
  );
}

export default Header;
