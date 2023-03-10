import { Flex } from "@mb/components/layout";
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
    <Navbar id="header" className="nav-parent" bg="light" expand="lg">
      <Navbar.Toggle className="nav-toggle" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="nav-colapse">
        <Flex flexDirection="row" className="m-auto" tag="ol">
          <Nav className="nav-menus">
            <Nav.Link className="nav-link" href="/categories/paintings">
              <Flex className="nav-titles" tag="li">
                Paintings
              </Flex>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/categories/glass">
              <Flex className="nav-titles" tag="li">
                Glass
              </Flex>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/categories/jewelry">
              <Flex className="nav-titles" tag="li">
                Jewelry
              </Flex>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/categories/sculptures">
              <Flex className="nav-titles" tag="li">
                Sculptures
              </Flex>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/categories/furniture">
              <Flex className="nav-titles" tag="li">
                Furniture
              </Flex>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/categories/objet-d-art">
              <Flex className="nav-titles" tag="li">
                Objet d&apos;art
              </Flex>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/categories/ceramics">
              <Flex className="nav-titles" tag="li">
                Ceramics
              </Flex>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/categories/porcelain">
              <Flex className="nav-titles" tag="li">
                Porcelain
              </Flex>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/categories/silver">
              <Flex className="nav-titles" tag="li">
                Silver
              </Flex>
            </Nav.Link>
            <Nav.Link className="nav-link" href="/categories/clocks">
              <Flex className="nav-titles" tag="li">
                Clocks
              </Flex>
            </Nav.Link>
          </Nav>
        </Flex>
      </Navbar.Collapse>
    </Navbar>
  );
};
