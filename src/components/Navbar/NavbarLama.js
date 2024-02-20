import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BCRLogo from './assets/img/img_logo.png'
import Button from 'react-bootstrap/Button';
import styles from './assets/css/navbar.module.css'
// import {View} from 'react-native';


const NavbarBCRLama = () => {
    return (
    <Navbar expand="sm" fixed='top' style={{background: "#F1F3FF"}}>
      <Container>
        <Navbar.Brand href="./"><img
              alt=""
              src={BCRLogo}
              className="d-inline-block align-top"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-center ">
            <Nav.Link href="#home" className={styles.NavText}>Our Services</Nav.Link>
            <Nav.Link href="#why-us" className={styles.NavText}>Why Us</Nav.Link>
            <Nav.Link href="#testimonial" className={styles.NavText}>Testimonial</Nav.Link>
            <Nav.Link href="#faq" className={styles.NavText}>FAQ</Nav.Link>
            <Nav.Link href="#register" className={styles.NavText}>
              <Button className={styles.Button}>Register</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarBCRLama;