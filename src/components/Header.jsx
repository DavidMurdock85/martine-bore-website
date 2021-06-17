import "./Header.scss";
import React from "react";
import { NavLink } from "react-router-dom"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";


export const Header = (props) => {

  return (

    <Navbar className="main-nav" bg="light" expand="lg" >
      {/*<Navbar.Brand href="#home"><img src="images/bore_logo.jpg" alt="logo" /></Navbar.Brand>*/}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <Nav.Link className="basic-nav-link" href="/categories/new-arrivals">New Arrivals</Nav.Link>

          {/* Navigation Menus */}

          {/* Dropdown - Fine Arts  */}

          <NavDropdown title="Fine Arts" className="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink to="/categories/paintings">Paintings</NavLink>
            </NavDropdown.Item>
            {/* 
            <NavDropdown.Item>
              <NavLink to="/categories/works-on-paper/">Works on Paper</NavLink>
            </NavDropdown.Item>
            */}
            <NavDropdown.Item>
              <NavLink to="/categories/sculpture/">Sculpture</NavLink>
            </NavDropdown.Item>
          </NavDropdown>

          {/* Dropdown - Decorative Arts  */}

          <NavDropdown title="Decorative Arts" className="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink to="/categories/glass">Glass</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/categories/silver">Silver</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/categories/porcelain">Porcelain</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/categories/gilded-bronze-ormolu">Gilded Bronze and Ormolu</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/categories/tableware">Tableware</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/categories/stemware">Stemware</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/categories/teacups">Teacups</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/categories/clocks">Clocks</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/categories/lighting">Lighting</NavLink>
            </NavDropdown.Item>
            {/*<NavDropdown.Item>
              <NavLink to="/categories/carpets">Carpets</NavLink>
            </NavDropdown.Item>*/}
            {/*<NavDropdown.Item>
              <NavLink to="/categories/furniture">Furniture</NavLink>
            </NavDropdown.Item>*/}
            {/*<NavDropdown.Item>
              <NavLink to="/categories/misc">Misc</NavLink>
            </NavDropdown.Item>*/}

          </NavDropdown>

          {/* Dropdown - Objet'd Art */}

          <NavDropdown title="Objet'd Art" className="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink to="/categories/miniatures">Miniatures</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/categories/figurines">Figurines</NavLink>
            </NavDropdown.Item>
            {/*<NavDropdown.Item>
              <NavLink to="/categories/boxes">Boxes</NavLink>
            </NavDropdown.Item>*/}
            {/*<NavDropdown.Item>
              <NavLink to="/categories/perfume-bottles">Perfume Bottles</NavLink>
            </NavDropdown.Item>*/}
            {/*<NavDropdown.Item>
              <NavLink to="/categories/sugar-castors">Sugar Castors</NavLink>
            </NavDropdown.Item>*/}
            {/*<NavDropdown.Item>
              <NavLink to="/categories/ink-wells">Ink Wells</NavLink>
            </NavDropdown.Item>
            */}
            {/*<NavDropdown.Item>
              <NavLink to="/categories/snuff-boxes">Snuff Boxes</NavLink>
            </NavDropdown.Item>*/}
            {/*<NavDropdown.Item>
              <NavLink to="/categories/powder-boxes">Powder Boxes</NavLink>
            </NavDropdown.Item>*/}
            {/*<NavDropdown.Item>
              <NavLink to="/categories/combs">Combs</NavLink>
            </NavDropdown.Item>*/}
            {/*<NavDropdown.Item>
              <NavLink to="/categories/tea-caddies">Tea Caddies</NavLink>
            </NavDropdown.Item>*/}
          </NavDropdown>

          {/*Dropdown - Jewelry*/}

          <NavDropdown title="Jewelry" className="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink to="/categories/rings">Rings</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/categories/bracelets">Bracelets</NavLink>
            </NavDropdown.Item>
            {/*<NavDropdown.Item>
              <NavLink to="/categories/earrings">Earrings</NavLink>
            </NavDropdown.Item>*/}
            <NavDropdown.Item>
              <NavLink to="/categories/necklaces">Necklaces</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/categories/brooches">Pins and Brooches</NavLink>
            </NavDropdown.Item>

            {/*<NavDropdown.Item>
              <NavLink to="/categories/costume">Costume</NavLink>
            </NavDropdown.Item>*/}

            {/* <NavDropdown.Item>
              <NavLink to="/categories/misc-jewelry">Misc</NavLink>
            </NavDropdown.Item>*/}

          </NavDropdown>

          {/*Asian Art*/}

          <NavDropdown title="Asian Art" className="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink to="/categories/japanese-art">Japanese Art</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/categories/chinese-art">Chinese Art</NavLink>
            </NavDropdown.Item>
            {/*<NavDropdown.Item>
              <NavLink to="/categories/southeast-asian">Southeast Asian Art</NavLink>
            </NavDropdown.Item>
*/}
          </NavDropdown>

          {/* Link - Art Nouveau */}

          <Nav.Link className="basic-nav-link" href="/categories/art-nouveau">Art Nouveau</Nav.Link>

          {/* Link - Art Deco */}

          <Nav.Link className="basic-nav-link" href="/categories/art-deco">Art Deco</Nav.Link>

          {/* Link - Mid Century Art */}

          <Nav.Link className="basic-nav-link" href="/categories/modern-art">Modern Art</Nav.Link>

          {/* Canadian Art*/}

          <Nav.Link className="basic-nav-link" href="/categories/canadian-art">Canadian Art</Nav.Link>

          <Nav.Link className="basic-nav-link" href="/categories/moorcroft">Moorcroft</Nav.Link>

          <Nav.Link className="basic-nav-link" href="/categories/lalique">Lalique</Nav.Link>

          <Nav.Link className="basic-nav-link" href="/categories/sold">Sold</Nav.Link>

          {/*Services*/}

          {/*
 <Nav.Link className="basic-nav-link" href="/Services.tsx">Services</Nav.Link>
*/}

          {/*About Us*/}

          {/*<Nav.Link className="basic-nav-link" href="/About.jsx">About Us</Nav.Link>*/}

        </Nav>

        {/*<Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>*/}

      </Navbar.Collapse>
    </Navbar>
  )
}

