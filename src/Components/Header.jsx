import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "../Asset/Css/header.css"
function Header() {


  return (
    <>
   
    <Navbar expand="lg" className="py-2 py-md-3 bg-body-tertiary  navlinks fixed-top position-fixed z-3 overflow-hidden">
      <Container className="py-2 text-white ">
        <Navbar.Brand as={Link} to="/">
          <img src="images/logo.svg" className='img' alt="logo" />
        </Navbar.Brand>

        
      

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto justify-content-lg-center align-items-lg-center">
            <Nav.Link as={Link} to="">About us</Nav.Link>
            <Nav.Link as={Link} to="">Services</Nav.Link>
            <Nav.Link as={Link} to="">Use Cases</Nav.Link>
            <Nav.Link as={Link} to="">Pricing</Nav.Link>
            <Nav.Link as={Link} to="">Blog</Nav.Link>
            <Nav.Link className='reqbtn align-self-start mx-lg-3  ' as={Link} to="">Request a quote</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default Header;
