import React from "react";
import { NavLink } from "react-router-dom"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Social = (props) => {

  return (

    <Navbar className="social-nav" bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <Nav.Link href="#home">0</Nav.Link>

          {/* Navigation Menus */}

          {/* Dropdown -   */}

          <NavDropdown title="1" className="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink to="/pages/">1</NavLink>
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>

          {/* Dropdown -   */}

          <NavDropdown title="2" className="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink to="/pages/">2</NavLink>
            </NavDropdown.Item>
          </NavDropdown>

        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}

