import React, { useState }  from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Image0 from './images/x.jpeg';
import Image1 from './images/x1.jpeg';
import Image2 from './images/x2.jpeg';
import Image3 from './images/x3.jpeg';
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
  const ChoiceButton = () => {
    const [choice, setChoice] = useState(null);
  
    const handleChoice2 = () => {
      setChoice('choice2');
    };
  
  return (
    <>
    <section className="sec-1">
      <Container>
        <Row>
          <Col lg={6} md={5} sm={12}>
            <h1 className="h-1">The Quality That You Love</h1>
            <p className="p-1">one of the best</p>
          </Col>
          <Col lg={6} md={7} sm={12}>
            <img className='img-1' src={Image1} alt="Image 1" />
            <img  className='img-2'src={Image2} alt="Image 2" />
            <img  className='img-3'src={Image3} alt="Image 3" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="sec-2">
      <Container>
        <Row>
          <Col className='col-0' lg={4} md={6} sm={12}>
          <img className='img-0' src={Image0} alt="Image 0" />
          <p className='p-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit doloremque consequuntur et distinctio ab.</p>
          <FaFacebook className='l-1' />
          <BsInstagram className='l-2' />
          <BsTwitterX  className='l-3'/>
          </Col>
          <Col className='col-0'  lg={4} md={6} sm={12}>
          <h4 className='h-0'>WORKING HOURS</h4>
          <p className='p-0'>Monday - Friday : 9:00 AM - 5:00 PM</p>
          <p className='p-0'>Saturday : 9:00 AM - 1:00 PM</p>
          </Col>
          <Col className='col-0' lg={4} md={6} sm={12}>
          <h4  className='h-0'>WHERE TO FIND US</h4>
          <p className='p-0'><a className='a-0' href="raninnasser770@gmail.com">raninnasser770@gmail.com</a>
          </p>
          <p className='p-0'> +00201094873854</p>
          </Col>
        </Row>
      </Container>
    </section>

    </>

  );
};

export default ChoiceButton;