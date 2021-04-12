import "./App.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Base } from "./components/layout";
import { About } from "./pages/About";
import { ArtCategories } from "./pages/ArtCategories";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <Container fluid={true} className="martine-bore-antiques">
      <Router>
        {/* Header */}

        {/* Logo/Banner */}
        <Base className="header">
          {/*<img src="/images/banner/banner-4.png"></img>*/}
          <Base className="banner"><h1>Martine Bore</h1></Base>
          <Base className="banner2"><h2>Antiques</h2></Base>
        <Base className="banner3"><h3>Fine French + European Antiques</h3></Base>
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

            <Route exact path="/about" component={About} />
          </Switch>
        </Base>

        {/* Footer */}
      </Router>
    </Container>
  );
};

export default App;
