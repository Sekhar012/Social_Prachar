// import { Navbar, Nav, Container } from 'react-bootstrap';

// export default function AppNavbar() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand href="/">Career Switch Tool</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/results">Results</Nav.Link>
//             <Nav.Link href="/admin">Admin</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }


import React from "react";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AppNavbar = () => {
  return (
    <Navbar
      expand="lg"
      bg="white"
      fixed="top"
      className="shadow-sm py-3 border-bottom border2 rounded-4"
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="/src/assets/logo.webp"
            width="100"
            height="30"
            className="d-inline-block align-top"
            alt="Social Prachar"
          />
          <span className="ms-4 fw-semibold text-primary d-none d-sm-inline fs-6">
            WELCOME TO SOCIAL PRACHAR
          </span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto fw-semibold">
            <NavDropdown
              title={<span className="text-dark">About</span>}
              id="about-nav-dropdown"
            >
              <NavDropdown.Item href="#about/action">Action</NavDropdown.Item>
              <NavDropdown.Item href="#about/another-action">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#about/something-else">
                Something else
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={<span className="text-dark">Features</span>}
              id="features-nav-dropdown"
            >
              <NavDropdown.Item href="#features/action">Action</NavDropdown.Item>
              <NavDropdown.Item href="#features/another-action">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#features/something-else">
                Something else
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={<span className="text-dark">AOL Partner Program</span>}
              id="aol-nav-dropdown"
            >
              <NavDropdown.Item href="#aol/action">Action</NavDropdown.Item>
              <NavDropdown.Item href="#aol/another-action">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#aol/something-else">
                Something else
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Right Side Buttons */}
          <Nav className="align-items-center">
            <Button
              variant="info"
              className="fw-bold rounded-pill px-4 me-3 shadow-sm text-white"
            >
              Join Now
            </Button>
            <Nav.Link
              href="#login"
              className="fw-semibold text-success px-3 rounded-pill border border-success"
            >
              Log in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
