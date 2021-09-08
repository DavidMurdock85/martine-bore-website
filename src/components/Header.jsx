import "./Header.scss";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Base, Col, Flex, Row, Split } from "./layout";

export const Header = (props) => {

  return (

    <Navbar className="main-nav" bg="light" expand="lg" >
      {/*<Navbar.Brand href="#home"><img src="images/bore_logo.jpg" alt="logo" /></Navbar.Brand>*/}
      <Navbar.Toggle className="main-nav-t" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">

          {/* Navigation Menus */}

          <Base tag="h5">
            <Nav.Link className="basic-nav-link" href="/categories/new-arrivals">New Arrivals</Nav.Link>
          </Base>

          {/* Dropdown - Fine Arts  */}

          <Base tag="h5">
            <NavDropdown title="Fine Arts" className="basic-nav-dropdown">
              <Base tag="h5">
                <NavDropdown.Item href="/categories/paintings">Paintings</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/miniatures">Miniatures</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/sculpture">Sculpture</NavDropdown.Item>
              </Base>
            </NavDropdown>
          </Base>

          {/* Dropdown - Decorative Arts  */}

          <Base tag="h5">
            <NavDropdown title="Decorative Arts" className="basic-nav-dropdown">
              {/*<Base tag="h5">
                <NavDropdown.Item href="/categories/glass">Glass</NavDropdown.Item>
              </Base>*/}
              <Base tag="h5">
                <NavDropdown.Item href="/categories/porcelain">Porcelain</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/clocks">Clocks</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/lighting">Lighting</NavDropdown.Item>
              </Base>
             
            </NavDropdown>
          </Base>

          {/* Dropdown - Art by Period */}

          <Base tag="h5">
            <NavDropdown title="Art by Period" className="basic-nav-dropdown">
              {/*<Base tag="h5">
                <NavDropdown.Item href="/categories/georgian">Georgian</NavDropdown.Item>
              </Base>*/}
              <Base tag="h5">
                <NavDropdown.Item href="/categories/french-empire">French Empire</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/victorian">Victorian</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/aesthetic-movement">Aesthetic Movement</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/art-nouveau">Art Nouveau</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/art-deco">Art Deco</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/modern-art">Modern Art</NavDropdown.Item>
              </Base>
            </NavDropdown>
          </Base>

          {/*Dropdown - Art by Region*/}

          <Base tag="h5">
            <NavDropdown title="Art by Region" className="basic-nav-dropdown">
              <Base tag="h5">
                <NavDropdown.Item href="/categories/japanese-art">Japanese Art</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/chinese-art">Chinese Art</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/canadian-art">Canadian Art</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/english-art">English Art</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/dutch-art">Dutch Art</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/italian-art">Italian Art</NavDropdown.Item>
              </Base>

            </NavDropdown>
          </Base>

          {/*Dropdown - Art by Maker*/}

          <Base tag="h5">
            <NavDropdown title="Art by Maker" className="basic-nav-dropdown">
            <Base tag="h5">
                <NavDropdown.Item href="/categories/moorcroft">Moorcroft</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/lalique">Lalique</NavDropdown.Item >
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/clarice-cliff">Clarice Cliff</NavDropdown.Item >
              </Base>
            </NavDropdown>
          </Base>

          {/* Dropdown - Figurines */}

          <Base tag="h5">
            <NavDropdown title="Figurines" className="basic-nav-dropdown">
              <Base tag="h5">
                <NavDropdown.Item href="/categories/european-figurines">European Figurines</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/royal-doulton-figurines">Royal Doulton Figurines</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/animal-figurines">Animal Figurines</NavDropdown.Item>
              </Base>
            </NavDropdown>
          </Base>

          {/* Dropdown - Tableware */}

          <Base tag="h5">
            <NavDropdown title="Tableware" className="basic-nav-dropdown">
              <Base tag="h5">
                <NavDropdown.Item href="/categories/plates">Plates</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/stemware">Stemware</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/tea-service">Tea Service</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/teacups">Teacups</NavDropdown.Item>
              </Base>
            </NavDropdown>
          </Base>

          {/* Dropdown - Silver */}

          <Base tag="h5">
            <NavDropdown title="Silver" className="basic-nav-dropdown">
              <Base tag="h5">
                <NavDropdown.Item href="/categories/candle-sticks">Candle Sticks</NavDropdown.Item>
              </Base>
              {/*<Base tag="h5">
                <NavDropdown.Item href="/categories/sugar-castors">Sugar Castors</NavDropdown.Item>
              </Base>*/}
            </NavDropdown>
          </Base>

          {/*Dropdown - Jewelry*/}

          <Base tag="h5">
            <NavDropdown title="Jewelry" className="basic-nav-dropdown">
              <Base tag="h5">
                <NavDropdown.Item href="/categories/rings">Rings</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/bracelets">Bracelets</NavDropdown.Item>
              </Base>
              {/*
              <Base tag="h5">
                <NavDropdown.Item href="/categories/earrings">Earrings</NavDropdown.Item>
              </Base>
              */}
              <Base tag="h5">
                <NavDropdown.Item href="/categories/necklaces">Necklaces</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/brooches">Brooches</NavDropdown.Item>
              </Base>
              <Base tag="h5">
                <NavDropdown.Item href="/categories/silver-jewelry">Silver Jewelry</NavDropdown.Item>
              </Base>
            </NavDropdown>
          </Base>

          {/*Link - Sold*/}

          <Base tag="h5">
            <Nav.Link className="basic-nav-link" href="/categories/sold">Sold</Nav.Link>
          </Base>
        </Nav>
      </Navbar.Collapse >
    </Navbar >
  )
}

