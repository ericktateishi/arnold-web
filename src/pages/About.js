import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import about from '../about.jpg'

import img1 from '../team/erick.jpg'
import img2 from '../team/jonathan.jpg'
import img3 from '../team/paloma.jpg'
import img4 from '../team/tayna.jpg'
import img5 from '../team/vini.jpeg'

const About = (props) => {
  return (
    <div className="about" style={{backgroundImage: "url(" + about + ")"}}>
      <Container>
        <Row>
          <Col>
            <h1>
              About
            </h1>
            <p>
              Aplicação de realidade aumentada que mostra os 
              dados da região selecionada de acordo com informações 
              da base da Nasa e instituições locais.
            </p>
            <p>
              Há diversos planetas 
              para serem explorados 
              e entendidos lá fora, mas 
              e aqui? você realmente sabe 
              o que acontece no nosso 
              planeta terra?  
            </p>
            <p>
              Populações em situações
              de risco sem serem enxergadas.
              Nós estamos aqui para plantar
              a bandeira delas na terra e
              fazer com que suas realidades
              sejam vistas.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Team</h3>
            <div className="team-member-all">
              <div className="team-member-box">
                <img src={img1} alt="Team member" className="team-member"/>
                <label>Erick Tateishi Jesus</label>
              </div>
              <div className="team-member-box">
                <img src={img2} alt="Team member" className="team-member"/>
                <label>Jhonatan Jair Arismendi Flórez</label>
              </div>
              <div className="team-member-box">
                <img src={img3} alt="Team member" className="team-member"/>
                <label>Paloma Rangel Rocha</label>
              </div>
              <div className="team-member-box">
                <img src={img4} alt="Team member" className="team-member"/>
                <label>Tayná Alves Rodrigues</label>
              </div>
              <div className="team-member-box">
                <img src={img5} alt="Team member" className="team-member"/>
                <label>Vinicius Souza Vieira</label>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About