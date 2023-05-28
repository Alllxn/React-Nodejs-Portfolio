import React from 'react';
import me from '../../assets/home/me.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';

export function Home() {
    
    return (
        <header>
            <video src={require('../../assets/home/home_background.mp4')} autoPlay loop muted />
            <div id='home-container' className='component load-animation-element'>
                <div id="presentation-content">
                    <div id='presentation-content-image' className="magic-background card">
                        <img src={me} alt='me' id='presentation-image'/>
                    </div>
                    <div id='presentation-content-text'>
                        <h1 className='magic-background-underline'>Allan Bastian Espinoza Ibañez</h1> 
                        <TypeAnimation
                            className="text-shadow"
                            cursor={true}
                            sequence={[
                            '$ Web developer 👽',
                            2000,
                            '$ Problem solver 🚀',
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
                                <a href="https://www.linkedin.com/in/AllanEspinozaIbanez" rel="nofollow noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="card" />
                                </a>
                            </li>
                            <li>
                                <a href="tel:+34615460628">
                                    <FontAwesomeIcon icon="fa-solid fa-phone" className="card" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:allan.esib@gmail.com">
                                    <FontAwesomeIcon icon="fa-solids fa-envelope" className="card" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="presentation-cta">
                    <a href="allan_espinoza_cv.pdf" id="button-resume" className="button-cta card" download>
                        <span className="magic-background">
                            📂
                        </span>
                        <span>
                            Resume
                        </span>     
                    </a>
                    <Link to="work-container" id="button-hire-me" className="button-cta card">
                        <span className="magic-background">
                            🔥
                        </span>
                        <span>
                            View projects
                        </span>    
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Home;