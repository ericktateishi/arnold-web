import React from 'react'

import { Container, Row, Col, ButtonToolbar, Button } from 'react-bootstrap'

import home from '../home.jpg'
import logo from '../logo-1.png'

const Home = (props) => {

  const goToVR = () => {
    window.location = 'http://localhost:8081/index.html'
  }

  return (
    <div className="home" style={{backgroundImage: "url(" + home + ")"}}>
      <Container className={"main-container"}>
        <Row>
          <Col>
            <img src={logo} alt="logo" className={"app-logo-main"}/>
            <ButtonToolbar>
              <Button variant="primary" style={{margin: "10px auto"}} onClick={() => goToVR()}>
                Conheça mais
              </Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home