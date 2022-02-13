import { Base } from "@mb/components/layout";
import React, { FC, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
    <Navbar id="header" className="main-nav" bg="light" expand="lg">
      {/*<Navbar.Brand href="#home"><img src="images/bore_logo.jpg" alt="logo" /></Navbar.Brand>*/}
      <Navbar.Toggle className="main-nav-t" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          {/* Navigation Menus */}

          <Base className="header-titles" tag="h5">
            <Nav.Link
              className="basic-nav-link"
              href="/categories/new-arrivals"
            >
              New Arrivals
            </Nav.Link>
          </Base>

          {/*Consider designing featured module above product display section with top example of section with dob dod and 
         curated comentary.  consider designing mysql featured section for mixed top end pieces from
        different sections. use key pair to generate images.
         */}

          {/*Dropdown - Paintings - Add New Section to replace Paintings*/}

          <Base className="header-titles" tag="h5">
            <DropDownOnHover title="Paintings" className="basic-nav-dropdown">
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/landscape-paintings">
                  Landscape Paintings
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/seascape-paintings">
                  Seascape Paintings
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/cityscape-paintings">
                  Cityscape Paintings
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/still-life-paintings">
                  Still Life Paintings
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/animal-paintings">
                  Animal Paintings
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/portrait-paintings">
                  Portrait Paintings
                </NavDropdown.Item>
              </Base>
            </DropDownOnHover>
          </Base>

          {/*Dropdown - Jewelry*/}

          <Base className="header-titles" tag="h5">
            <DropDownOnHover title="Jewelry" className="basic-nav-dropdown">
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/rings">
                  Rings
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/bracelets">
                  Bracelets
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/necklaces">
                  Necklaces
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/earrings">
                  Earrings
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/brooches">
                  Brooches
                </NavDropdown.Item>
              </Base>
            </DropDownOnHover>
          </Base>

          {/* Dropdown - Art by Period */}

          <Base className="header-titles" tag="h5">
            <DropDownOnHover
              title="Art by Period"
              className="basic-nav-dropdown"
            >
              {/*Link Example*/}

              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/georgian">
                  Georgian
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/french-empire">
                  French Empire
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/victorian">
                  Victorian
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/aesthetic-movement">
                  Aesthetic Movement
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/belle-epoque">
                  Belle Époque
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/art-nouveau">
                  Art Nouveau
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/art-deco">
                  Art Deco
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/modern-art">
                  Modern Art
                </NavDropdown.Item>
              </Base>
            </DropDownOnHover>
          </Base>

          {/*Dropdown - Art by Region*/}

          <Base className="header-titles" tag="h5">
            <DropDownOnHover
              title="Art by Region"
              className="basic-nav-dropdown"
            >
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/canadian-art">
                  Canadian Art
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/dutch-art">
                  Dutch Art
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/english-art">
                  English Art
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/french-art">
                  French Art
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/german-art">
                  German Art
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/german-art">
                  Italian Art
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/japanese-art">
                  Japanese Art
                </NavDropdown.Item>
              </Base>
            </DropDownOnHover>
          </Base>

          {/*Dropdown - Art by Maker*/}

          <Base className="header-titles" tag="h5">
            <DropDownOnHover
              title="Art by Maker"
              className="basic-nav-dropdown"
            >
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/moorcroft">
                  Moorcroft
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/lalique">
                  Lalique
                </NavDropdown.Item>
              </Base>
            </DropDownOnHover>
          </Base>

          {/* Dropdown - Tableware */}

          <Base className="header-titles" tag="h5">
            <DropDownOnHover title="Tableware" className="basic-nav-dropdown">
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/plates">
                  Plates
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/stemware">
                  Stemware
                </NavDropdown.Item>
              </Base>
              <Base className="header-h5" tag="h5">
                <NavDropdown.Item href="/categories/tea-service">
                  Tea Service
                </NavDropdown.Item>
              </Base>
            </DropDownOnHover>
          </Base>

          {/* Silver - Add section!!!! */}

          <Base className="header-titles" tag="h5">
            <Nav.Link className="basic-nav-link" href="/categories/silver">
              Silver
            </Nav.Link>
          </Base>

          {/* Clocks */}
   
          <Base className="header-titles" tag="h5">
            <Nav.Link className="basic-nav-link" href="/categories/clocks">
              Clocks
            </Nav.Link>
          </Base>

          {/* Link - Sold */}

          <Base className="header-titles" tag="h5">
            <Nav.Link className="basic-nav-link" href="/categories/sold">
              Sold
            </Nav.Link>
          </Base>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
