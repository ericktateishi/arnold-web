import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap'

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contribute from './pages/Contribute';
import Data from './pages/Data'

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo-1.png'

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">
          <img src={logo} alt="ARnold logo" className={"app-logo"}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contribute">Contribute</Nav.Link>
            <Nav.Link href="/data">Data</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contribute" component={Contribute} />
          <Route exact path="/data" component={Data} />
        </Switch>
      </Router>
      <Container className="footer">
        <Row>
          <Col>Made with ❤ by ARNOLD team</Col>
          <Col>contact@arnold.org</Col>
          <Col>+55 11 24683494</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
