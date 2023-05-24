import React from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import "./LandingPage.css"
const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
            <Row>
                <div>
                  <h1 className='title'>Welcome the Notes</h1>
                <p className='subtitle'>
                  One Safe Place For Your Notes
                </p>
                </div>
              <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
              </a>
            </div>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage