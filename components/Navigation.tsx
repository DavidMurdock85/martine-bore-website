import { Base } from "@mb/components/layout";
import React, { FC, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@mb/components/elements";

interface DropDownOnHoverProps {
  className: string;
  title: string;
}

const DropDownOnHover: React.FC<DropDownOnHoverProps> = ({
  className,
  children,
  title,
}) => {
  const [show, setShow] = useState(false);

  return (
    <NavDropdown
      id="NavDropdown"
      title={title}
      className={className}
      show={show}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
    </NavDropdown>
  );
};

export const Navigation: React.FC = (props: any) => {
  return (
    <Navbar id="header" className="nav-parent" bg="light" expand="lg">
      <Navbar.Toggle className="nav-toggle" aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Base className="m-auto" tag="ol">
          <Nav >
            {/* Navigation Menus */}

            {/* Paintings */}

            <Base className="header-titles" tag="li">
              <Nav.Link className="basic-nav-link" href="/categories/paintings">
                Paintings
              </Nav.Link>
            </Base>

            {/* Glass */}

            <Base className="header-titles" tag="li">
              <Nav.Link className="basic-nav-link" href="/categories/glass">
                Glass
              </Nav.Link>
            </Base>

            {/* Jewelry*/}

            <Base className="header-titles" tag="li">
              <Nav.Link className="basic-nav-link" href="/categories/jewelry">
                Jewelry
              </Nav.Link>
            </Base>

            {/* Sculpture */}

            <Base className="header-titles" tag="li">
              <Nav.Link className="basic-nav-link" href="/categories/boxes">
                Sculpture
              </Nav.Link>
            </Base>

            {/* Furniture */}

            <Base className="header-titles" tag="li">
              <Nav.Link className="basic-nav-link" href="/categories/furniture">
                Furniture
              </Nav.Link>
            </Base>

            {/* Carpets */}

            <Base className="header-titles" tag="li">
              <Nav.Link className="basic-nav-link" href="/categories/carpets">
                Carpets
              </Nav.Link>
            </Base>

            {/* Objet D'Art */}

            <Base className="header-titles" tag="li">
              <Nav.Link
                className="basic-nav-link"
                href="/categories/objet-d-art"
              >
                Objet D'Art
              </Nav.Link>
            </Base>

            {/* Ceramics */}

            <Base className="header-titles" tag="li">
              <Nav.Link className="basic-nav-link" href="/categories/ceramics">
                Ceramics
              </Nav.Link>
            </Base>

            {/* Porcelain */}

            <Base className="header-titles" tag="li">
              <Nav.Link className="basic-nav-link" href="/categories/porcelain">
                Porcelain
              </Nav.Link>
            </Base>

            {/* Silver */}

            <Base className="header-titles" tag="li">
              <Nav.Link className="basic-nav-link" href="/categories/silver">
                Silver
              </Nav.Link>
            </Base>

            {/* Clocks */}

            <Base className="header-titles" tag="li">
              <Nav.Link className="basic-nav-link" href="/categories/clocks">
                Clocks
              </Nav.Link>
            </Base>
          </Nav>
        </Base>
      </Navbar.Collapse>

      <Base className="social-svg">
      <Link href="https://www.instagram.com/martineboreantiques/">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      </Base>

    </Navbar>
  );
};
