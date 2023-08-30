import React from 'react'
import NavigationBar from '../Components/NavigationBar';
import '../Components/pagescss/Login.css'; 
import { Container,Row,Col,Card } from 'react-bootstrap';


const Login = () => {
  return (
    <>
    <NavigationBar />
    <section className='login'>
    <h3 className='display-1 text-center'>Login</h3>
    <Container fluid className="bgimg">
<h3>card plase</h3>
   <Row>
  <Col md={6} lg={4} className="my3">
              <Card className="mt-5 fluid">
                <Card.Img variant="top" src="./assets/card1.png" className='img-fluidd d-flex flex-column' />
                <Card.Body>
                  <Card.Title>Website Design & Development</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur. Semper hendreit import
                    maecenas feugiat habitasse scelerisque. Sit egestas nec.
                  </Card.Text>
                  <div className='text-end text-success'><span>VIEW MORE<i className="bi bi-chevron-right"></i></span></div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className='mt-5 '>
                <Card.Img variant="top" src="./assets/card2.png" className='img-fluid' />
                <Card.Body>
                  <Card.Title>Logo & Banner Designing</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur. Semper hendreit import
                    maecenas feugiat habitasse scelerisque. Sit egestas nec.
                  </Card.Text>
                  <div className='text-end text-success'><span>VIEW MORE<i className="bi bi-chevron-right"></i></span></div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className='mt-5'>
                <Card.Img variant="top" src="./assets/card3.png" className='img-fluid' />
                <Card.Body>
                  <Card.Title>Android App Development</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur. Semper hendreit import
                    maecenas feugiat habitasse scelerisque. Sit egestas nec.
                  </Card.Text>
                  <div className='text-end text-success'><span>VIEW MORE<i className="bi bi-chevron-right"></i></span></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
      
    </section>
    </>

  )
}

export default Login