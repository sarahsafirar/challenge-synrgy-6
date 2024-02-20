// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import BCRLogo from './assets/img/img_logo.png'
// import Button from 'react-bootstrap/Button';
import styles from './assets/css/navbar.module.css'
// import {View} from 'react-native';


const NavbarBCR = () => {
    return (

      <section id="nav-top">
        <nav className="navbar navbar-expand-sm fixed-top" style={{background: "#F1F3FF"}}>
            <div className="container px-5">
                <a className="navbar-brand" href="./">
                    <img src={BCRLogo} alt="BCR-Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className={styles.NavText}><a className="nav-link" href="#our-service">Our Services</a></li>
                        <li className={styles.NavText}><a className="nav-link" href="#why-us">Why Us</a></li>
                        <li className={styles.NavText}><a className="nav-link" href="#testimonial">Testimonial</a></li>
                        <li className={styles.NavText}><a className="nav-link" href="#faq">FAQ</a></li>
                        <li> <a href="./register">
                                <button className={styles.Button} style={{margin: "10px"}}>Register</button>
                              </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>


    )
}

export default NavbarBCR;