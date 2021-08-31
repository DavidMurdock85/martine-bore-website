import "./App.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Base, Col, Split } from "./components/layout";
import { ProductPage } from "./components/ProductPage";
import { About } from "./pages/About";
import { ArtCategories } from "./pages/ArtCategories";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";

const App = () => {
  return (
    <Container fluid={true} className="martine-bore-antiques">
      <Router>
        {/* Header */}

        {/*Header - Contact */}
        <Col className="upper-header">
          <Split>
            <Base className="upper-header-text" tag="h5">
              1462 Marine Dr, West Vancouver, BC
            </Base>
            <Base className="upper-header-text" tag="h5">
              (604) 912-0292
            </Base>
          </Split>
        </Col>

        {/* Logo/Banner */}
        <Base className="header">
          <Base className="banners">
            <Base className="banner" tag="h1">
              Martine Boré
            </Base>
            <Base className="banner2" tag="h2">
              Antiques
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

            <Route exact path="/products" component={ProductPage} />
            <Route
              exact
              path="/products/:productId"
              component={ProductPage}
            ></Route>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
          </Switch>

          {/*Footer*/}

          <Footer />
        </Base>
      </Router>
    </Container>
  );
};

export default App;
