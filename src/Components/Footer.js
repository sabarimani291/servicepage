import React from 'react';
import { Container, Row,Col} from 'react-bootstrap';
import '../Components/pagescss/Footer.css';

const Footer = () => {
  return (
    <div className='Footer bg-success text-light mt-2 border-top: 2px solid green'>
      <Container fluid className='justify-content-center'>
        <Row>
          <Col md={6} lg={3} xs={12} className='ft-1'>
            <h3 className='h4'>Senchola</h3>
            <p> Lorem ipsum dolor sit amet consectetur. Semper hendreit import
        maecenas feugiat habitasse scelerisque. Sit egestas nec.</p>
             </Col>
          <Col md={6} lg={2} xs={12} className='ft-2'>
            <div className="use case">
            <h4>Use Cases</h4>
            <ul className='list-unstyled text-light'>
             <li> <a href='/'>UI Design</a></li>
              <li> <a href='/'>UI Design</a></li>
              <li> <a  href='/'>UI Design</a></li>
              <li> <a  href='/'>UI Design</a></li>
              <li> <a  href='/'>UI Design</a></li>
              <li> <a  href='/'>UI Design</a></li>
            </ul>
             </div>
             </Col>
          <Col md={6} lg={2} xs={12} className='ft-3'> 
          <div className="explore">
            <h4>Explore</h4>
            <ul className='list-unstyled'>
              <li> <a href='/'>Figma</a></li>
              <li> <a href='/'>Customers</a></li>
              <li> <a  href='/'>Why I Love Figma</a></li>
              <li> <a  href='/'>Figma</a></li>
              <li> <a  href='/'>Customers</a></li>
              <li> <a  href='/'>Why I Love Figma</a></li>
            </ul>
             </div>
          </Col>
          <Col md={6} lg={2} xs={12} className='ft-4'> 
          <div className="resources">
            <h4>Resources</h4>
            <ul className='list-unstyled'>
              <li> <a  href='/'>Resource Hub</a></li>
              <li> <a  href='/'>Suport</a></li>
              <li> <a  href='/'>Education</a></li>
              <li> <a  href='/'>Resource Hub</a></li>
              <li> <a  href='/'>Suport</a></li>
              <li> <a  href='/'>Education</a></li>
            </ul>
             </div>
          </Col>
          <Col md={6} lg={3} xs={12} className='ft-5'> 
          <div className="footer-mail">
      <h6 className='heading'>Connect with Senchola Technologies</h6>
       <input type="email"  id="exampleFormControlInput1" placeholder="Email"/>
              
            <div className='footer-icons'>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-youtube"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
          </div>
          </div>
          </Col>
        </Row>
        <hr  className="bg-danger"/>
<div className=' bg-success text-light '>
  <p className='text-center'>All Copyrights Reserved <span><i className="bi bi-c-circle"></i></span> 2023 Senchola Technologies Solution</p>
</div>
      </Container>
     
    </div>
  )
}

export default Footer