import "./App.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Base, Col, Flex, Row, Split } from "./components/layout";
import { ArtCategories } from "./pages/ArtCategories";
import { Home } from "./pages/Home";
import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <Container fluid={true} className="martine-bore-antiques">
      <Router>
        {/* Header */}

        {/*Header - Contact */}
        <Col className="upper-header">
          <Split>
            <Base className="upper-header-text">
              <p> info@martineboreantiques.com | (604) 912-0292</p>
            </Base>
            <Base className="upper-header-links">
              {/*<NavLink className="upper-header-link" to="/components/About">About Us</NavLink>*/}
              {/*<NavLink className="upper-header-link" to="/Services">Services</NavLink>*/}
            </Base>
          </Split>
        </Col>

        {/* Logo/Banner */}
        <Base className="header">
          <Base className="banners">
            <Base className="banner">
              <h1>Martine Boré</h1>
            </Base>
            <Base className="banner2">
              <h2>Antiques</h2>
            </Base>
          </Base>
        </Base>

        {/* Header Navigation */}
        <Header />

        {/* Body */}

        {/* Body - Pages Switch Board */}
        <Base className="content" expand="width">
          <Switch>
            {/* Homepage  */}

            <Route exact path="/" component={Home} />

            {/* Catagories and Catagory sub routes */}
            <Route exact path="/categories" component={ArtCategories} />
            <Route
              exact
              path="/categories/:category"
              component={ArtCategories}
            />
            {/*<Route exact path="/About.jsx" component={About} />*/}
          </Switch>

          {/*Footer*/}

          <Footer />
        </Base>
      </Router>
    </Container>
  );
};

export default App;
