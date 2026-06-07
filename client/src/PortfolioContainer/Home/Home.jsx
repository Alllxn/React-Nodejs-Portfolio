import React from 'react';
import me from '../../assets/home/me.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';
import { useLanguage } from '../../context/LanguageContext';

export function Home() {
    const { t } = useLanguage();

    return (
        <header>
            <div id='home-container' className='component load-animation-element'>
                <div id="presentation-content">
                    <div id='presentation-content-image' className="magic-background card">
                        <img src={me} alt='me' id='presentation-image'/>
                    </div>
                    <div id='presentation-content-text'>
                        <h1 className='magic-background-underline'>Allan Bastian Espinoza Ibañez</h1>
                        <TypeAnimation
                            cursor={true}
                            sequence={[
                                t.home.type1,
                                2000,
                                t.home.type2,
                                2000,
                            ]}
                            wrapper="p"
                            repeat={Infinity}
                        />
                        <ul id="home-media-links">
                            <li>
                                <a href="https://github.com/Alllxn" rel="nofollow noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon="fa-brands fa-github" className="card" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/allanwebdev" rel="nofollow noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="card" />
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/34628766431" rel="nofollow noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon="fa-brands fa-whatsapp" className="card" />
                                </a>
                            </li>
                            <li>
                                <a href="tel:+34628766431">
                                    <FontAwesomeIcon icon="fa-solid fa-phone" className="card" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contact@allandev.es">
                                    <FontAwesomeIcon icon="fa-solids fa-envelope" className="card" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="presentation-cta">
                    <a href={t.home.cv} id="button-resume" className="button-cta card" download>
                        <span className="magic-background">
                            📂
                        </span>
                        <span>
                            {t.home.resume}
                        </span>
                    </a>
                    <Link to="work-container" id="button-hire-me" className="button-cta card">
                        <span className="magic-background">
                            🔥
                        </span>
                        <span>
                            {t.home.viewProjects}
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Home;
