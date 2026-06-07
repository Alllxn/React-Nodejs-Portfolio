import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();
    const f = t.footer;

    return (
        // El footer en pantallas moviles se ve por encima del contact hasta 768 width
        <footer id="footer-container">
            <div id="footer-wrapper">
                <div id="footer-brand">
                    <a href='.' id='footer-logo'>
                        <img className='magic-background' src='/extraterrestre.png' alt='Allan Espinoza logo'></img>
                        <div>
                            <p>Allan Espinoza</p>
                            <span>{f.role}</span>
                        </div>
                    </a>
                    <p>{f.tagline}</p>
                </div>
                <nav id="footer-navigation" aria-label="Footer navigation">
                    <p className="footer-title">{f.explore}</p>
                    <ul>
                        <li><Link to="home-container" offset={-200} smooth={true} duration={100}>{t.nav.home}</Link></li>
                        <li><Link to="about-container" smooth={true} duration={100}>{t.nav.about}</Link></li>
                        <li><Link to="timeline-container" smooth={true} duration={100}>{t.nav.timeline}</Link></li>
                        <li><Link to="work-container" smooth={true} duration={100}>{t.nav.projects}</Link></li>
                        <li><Link to="contact-container" smooth={true} duration={100}>{t.nav.contact}</Link></li>
                    </ul>
                </nav>
                <div id="footer-contact">
                    <p className="footer-title">{f.connect}</p>
                    <ul>
                        <li>
                            <a href="mailto:contact@allandev.es" aria-label="Email Allan Espinoza">
                                <FontAwesomeIcon icon="fa-solid fa-envelope"/>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+34628766431" rel="nofollow noopener noreferrer" target="_blank" aria-label="Phone Allan Espinoza">
                                <FontAwesomeIcon icon="fa-solid fa-phone"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/34628766431" rel="nofollow noopener noreferrer" target="_blank" aria-label="WhatsApp Allan Espinoza">
                                <FontAwesomeIcon icon="fa-brands fa-whatsapp"/>
                            </a>
                        </li>
                        <li>
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
                    <a href="mailto:contact@allandev.es" id="footer-email">contact@allandev.es</a>
                </div>
            </div>
            <div id="footer-bottom">
                <p>© {currentYear} Allan Bastian Espinoza Ibañez. {f.copyright}</p>
            </div>
        </footer>
    )
}
