import { Container, Row, Col } from "react-bootstrap"

const Home = () => {
  return (
    <>
      <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box">
              <Col>
                <h1>
                  Witness <br/> <span>the transformation of visions</span> <br/> into reality
                </h1>
                <p>Explore our diverse portofolio showcasing successful collaborations between form and function, design and construction</p>
              </Col>
            </Row>
          </Container>
        </header>
      </div>

      
    </>
  )
}

export default Home