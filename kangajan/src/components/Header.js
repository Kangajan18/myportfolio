import * as React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './Header.css';

const Header = () => {
  return (
    <div className="con">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Develop<span style={{ color: "orange" }}>er</span>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <span >About me</span>
            </Nav.Link>
            <Nav.Link href="#features">
              <span >Skills</span>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <span>Contact</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
