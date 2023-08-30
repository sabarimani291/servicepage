import React from 'react'
import NavigationBar from '../Components/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Components/pagescss/Services.css';
import {FaRegHandPointRight,FaRegUser,FaHeadset} from "react-icons/fa6";



const Services = () => {
  return (
    <>
      <NavigationBar />
      <section className='services'>
        {/* carosuel */}

        <Container fluid className="carousel">
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img src="./assets/cl1.png" alt="1st img" className="img-fluid d-block" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="./assets/cl2.png" alt="2nd img" className="img-fluid d-block"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="./assets/cl3.png" alt="3rd img" className="img-fluid d-block" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>

        {/*end*/}

        {/*card */}

        <Container fluid>
          <div className='text-center my-3 py-5'>
            <h3 className='text-success'>OUR SERVICES</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Semper hendreit import
              maecenas feugiat habitasse scelerisque. Sit egestas nec
            </p>
          </div>
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
            <Col md={6} lg={4}>
              <Card className='mt-5'>
                <Card.Img variant="top" src="./assets/card4.png" className='img-fluid' />
                <Card.Body>
                  <Card.Title>Wordprerss Development</Card.Title>
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
                <Card.Img variant="top" src="./assets/card5.png" className='img-fluid' />
                <Card.Body>
                  <Card.Title>Content Marketing</Card.Title>
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
                <Card.Img variant="top" src="./assets/Rectangle 4588-5.png" className='img-fluid' />
                <Card.Body>
                  <Card.Title>IOS App Development</Card.Title>
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
        <div className='text-center mt-5'>
          <Button variant="success" className="rounded-pill" >View More Service<i className="bi bi-chevron-right"></i></Button>
        </div>

        {/* card end*/}

        {/*whatwedocontent*/}

        <Container className="mt-5">
          <Row className='align-items-center'>
            <Col lg={7} md={12} >
              <img src="./assets/wwedo.png" className='img-fluid' alt='whatwedo' />
            </Col>
            <Col lg={5} md={12}>
              <div className='text-center mt-3'>
                <h5 className='text-success fw-bold'>WHAT WE DO</h5>
                <h3 > We Help Companies Scale with Vetted,
                  Expert Talent & Resources</h3>
                <p className='lead text-muted'>Lorem ipsum dolor sit amet consectetur. Semper hendreit import
                  maecenas feugiat habitasse scelerisque. Sit egestas nec.</p>
                <Button variant="success" className="rounded-pill" >Contact Us</Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* whatwedo end */}

        {/*scale our team start */}
        
          <Container fluid>
          <div className='text-center my-3 py-5'>
        <h1 className='text-success'>A BETTER WAY TO SCALE YOUR TEAM </h1>
        <p>Lorem ipsum dolor sit amet consectetur. Semper hendreit import
        maecenas feugiat habitasse scelerisque. Sit egestas nec
        </p>
        </div>
          </Container>
          <div className='content3' id="bg">
        <div>
      <Container className='cards' md="1">
              <Row>
                <Col lg={4} md={6} xs={12}>
                  <Card className='card1' style={{ width: '18rem' }}>
                    <FaHeadset id='icon1'/>
                    <Card.Body>
                      <Card.Title>Breadth and depth immediate scale </Card.Title>
                      <Card.Text className='text'>
                        Quisquam odit ipsum magnam in ratione illo. Earum maxime quod mollitia accusantium consequatur, ex repellendus voluptas, architecto cupiditate ratione assumenda sapiente sed.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                < Col lg={4} md={6} xs={12}>
                  <Card className="card2" style={{ width: '18rem' }}>
                 <FaRegUser id="icon2"/>
                    <Card.Body>
                      <Card.Title >Breadth and depth immediate scale </Card.Title>
                      <Card.Text className='text'>
                        Recusandae libero quos quod laboriosam, quos quod laboriosam,Recusandae libero quos quod laboriosam, vitae error animi asperiores saepe officiis nisi?
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={4} md={6} xs={12}>
                  <Card className="card3" style={{ width: '18rem' }}>
                    <FaRegHandPointRight id="icon3" />
                    <Card.Body>
                      <Card.Title>Breadth and depth immediate scale </Card.Title>
                      <Card.Text className='text'>
                        Quisquam odit ipsum magnam in ratione illo. Earum maxime quod mollitia accusantium consequatur, ex repellendus voluptas, architecto cupiditate ratione assumenda sapiente sed.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
        </div>  
  </div>
        {/*scale our team  end*/}
      </section>
    </>
  )
}

export default Services