import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        // El footer en pantallas moviles se ve por encima del contact hasta 768 width
        <footer id="footer-container">
            <div id="footer-wrapper">
                <div id="footer-brand">
                    <a href='.' id='footer-logo'>
                        {/* TODO: cambiar el borde del icono del alien del footer */}
                        <img className='magic-background' src='/extraterrestre.png' alt='Allan Espinoza logo'></img>
                        <div>
                            <p>Allan Espinoza</p>
                            <span>Web Developer</span>
                        </div>
                    </a>
                    <p>
                        I enjoy turning ideas into web experiences that feel clear, useful, and carefully built from the first click.
                    </p>
                </div>
                <nav id="footer-navigation" aria-label="Footer navigation">
                    <p className="footer-title">Explore</p>
                    <ul>
                        <li><Link to="home-container" offset={-200} smooth={true} duration={100}>Home</Link></li>
                        <li><Link to="about-container" smooth={true} duration={100}>About</Link></li>
                        <li><Link to="timeline-container" smooth={true} duration={100}>Timeline</Link></li>
                        <li><Link to="work-container" smooth={true} duration={100}>Projects</Link></li>
                        <li><Link to="contact-container" smooth={true} duration={100}>Contact</Link></li>
                    </ul>
                </nav>
                <div id="footer-contact">
                    <p className="footer-title">Let's Connect</p>
                    <ul>
                        <li>
                            {/* TODO: comprobar porque no funciona el mailto */}
                            <a href="mailto:contact@allandev.es" aria-label="Email Allan Espinoza">
                                <FontAwesomeIcon icon="fa-solid fa-envelope"/>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+34628766431" rel="nofollow noopener noreferrer" target="_blank" aria-label="GitHub profile">
                                <FontAwesomeIcon icon="fa-solid fa-phone"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/34628766431" rel="nofollow noopener noreferrer" target="_blank" aria-label="WhatsApp Allan Espinoza">
                                <FontAwesomeIcon icon="fa-brands fa-whatsapp"/>
                            </a>
                        </li>
                        <li>
                            {/* TODO: comprobar url del linkedin */}
                            <a href="https://www.linkedin.com/in/allanwebdev" rel="nofollow noopener noreferrer" target="_blank" aria-label="LinkedIn profile">
                                <FontAwesomeIcon icon="fa-brands fa-linkedin-in"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Alllxn" rel="nofollow noopener noreferrer" target="_blank" aria-label="GitHub profile">
                                <FontAwesomeIcon icon="fa-brands fa-github"/>
                            </a>
                        </li>
                    </ul>
                    {/* TODO: comprobar porque no funciona el mailto */}
                    <a href="mailto:contact@allandev.es" id="footer-email">contact@allandev.es</a>
                </div>
            </div>
            <div id="footer-bottom">
                <p>© {currentYear} Allan Espinoza. Designed and built with React.</p>
            </div>
        </footer>
    )
}
