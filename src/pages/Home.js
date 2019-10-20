import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

const Home = (props) => {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col>
          <h1>
            Hi, I'm ARnold !
          </h1>
          <p>
            And we are here to help people and to show you how different our reality can be. 
          </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home