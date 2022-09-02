import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/logo.png'
import './Navbar.css'

function NavScrollExample() {
return (
<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 nav-ele'>
<Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#">
            <img src={logo} className='home-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-item"
            style={{ maxHeight: '300px' }}
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action1">Courses</Nav.Link>
            <Nav.Link href="#action1">Our Value Position</Nav.Link>
            <Nav.Link href="#action1">About Us</Nav.Link>
            <Nav.Link href="#action1">Ambassadors</Nav.Link>
          </Nav>
          <Form className="d-flex form-item">



        <Nav.Link href="#action1" className='login'>LOGIN</Nav.Link>
        <button className="register-btn rounded">Register</button>
        <Form.Select className='select-item' >
          <option>EN</option>
          <option>AR</option>
        </Form.Select>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
  );
}

export default NavScrollExample;