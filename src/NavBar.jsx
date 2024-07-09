import React, { useEffect, useState } from 'react';
import { Container, Button, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link  } from 'react-router-dom';
import axios from 'axios';
import Image1 from './images/x.jpeg';
import { FaShoppingCart } from 'react-icons/fa';
import AuthDeitails from './images/AuthDeitails';


const NavBar = () => {
  const [Data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setData(res.data);
        setRecords(res.data);
      });
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    setRecords(Data.filter(item => item.title.toLowerCase().includes(searchTerm)));
  };

  return (
    <>
  <Navbar expand="lg" className="navv">
    <Container fluid>
      <Navbar.Brand>
        <Link to="/"><img className='imag-1' src={Image1} /></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link className='nav-links' to="/home">Home</Link>
          <Link className='nav-links' to="/products">Products</Link>
          <NavDropdown title="More" id="navbarScrollingDropdown">
            <Link className='dropdown-item' to="/aboutus">About Us</Link>
            <Link className='dropdown-item' to="/LoginPage">Log In</Link>
            <Link className='dropdown-item' to="/RegisterPage">Create Email</Link>
          </NavDropdown>
          <Link className='nav-links' to="/Pcart"><FaShoppingCart /></Link>
        </Nav>
        <AuthDeitails />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search for products"
            className="me-2"
            aria-label="Search for products"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Button className='btn-1' variant="outline-success">Search</Button>
        </Form>
        {searchTerm.trim() !== '' && (
          <div className='div-10'>
            {records.slice(0, 5).map((d, i) => (
              <div key={i}><p>{d.title}</p></div>
            ))}
          </div>
        )}
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
  );
};

export default NavBar;
{/* <Navbar expand="lg" className="navv">
<Container fluid>
  <Navbar.Brand><img className='imag-1' src={Image1} /> </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link className='nav-links' href="/home">Home</Nav.Link>
      <Nav.Link className='nav-links' href="/Products">Products</Nav.Link>
      <NavDropdown title="More" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/Aboutus">About Us</NavDropdown.Item>
        <NavDropdown.Item href="/Contactus">
          Contact Us
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search for products"
        className="me-2"
        aria-label="Search for products"
        onChange={handleSearch}
        value={searchTerm}
      />
      <Button className='btn-1' variant="outline-success">Search</Button>
    </Form>
    {searchTerm.trim() !== '' && (
      <div className='div-10'>
        {records.slice(0, 5).map((d, i) => (
          <div key={i}><p>{d.title}</p></div>
        ))}
      </div>
    )}
  </Navbar.Collapse>
</Container>
</Navbar> */}