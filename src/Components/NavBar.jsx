import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import { BsSearch} from 'react-icons/bs';
import {GiLoveSong} from 'react-icons/gi';
import {GoHome} from 'react-icons/go';
import {BsFillPersonFill} from 'react-icons/bs';
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/" >
        <Image height={"50px"} src="data:image/png;base64,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" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' , cursor:"pointer"}}
            navbarScroll
          >
        <Link to="/" > <Nav>Home <GoHome/></Nav></Link>   
        <Link to="/songs" > <Nav>Songs<GiLoveSong/> </Nav></Link>   
        <Link to="/artist" > <Nav>Artists<BsFillPersonFill/></Nav></Link>   
        <Link to="/login" > <Nav>Login</Nav></Link>    
             <Link to="/register" > <Nav>Register</Nav></Link>    
          </Nav>
          <Form className="d-flex">
            {/* <BsSearch style={{position:"absolute"}} /> */}
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
             
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar