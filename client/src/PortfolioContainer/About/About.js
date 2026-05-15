import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {

    return (
        <section id='about-container' className='component'>
            <h2 className='magic-background-underline load-animation-element'>Me, Myself & I</h2>
            <article id='about-presentation'>
                <div id='biography' className=''>
                    <div id="biography-intro" className="biography-element load-animation-element">
                        <div className="about-intro-marker magic-background">
                            <img src='/extraterrestre.png' alt='alien'></img>
                        </div>
                        <div className="about-intro-copy">
                            <span className="about-intro-label">Web developer</span>
                            <p>
                                Hello, my name is <b>Allan Bastian Espinoza Ibañez</b>. I'm driven by curiosity and a practical love for solving problems.
                            </p>
                            <p>
                                I like building things that make sense: clear interfaces, useful workflows, and solutions that feel easier for the people using them.
                            </p>
                            <p>
                                I currently work at <b>Ayesa</b>, helping build Moodle-based learning platforms for institutions across Spain.
                            </p>
                        </div>
                    </div>
                    <div id="biography-more-info"> 
                        <div id="biography-education" className="biography-element load-animation-element">
                            <h3>Education <span className="education-icon">📚</span></h3>
                            <ul className="education-list">
                                <li>
                                    <div>
                                        <p>Higher Technician in Web Application Development (DAW)</p>
                                        <p><span className="biography-institution">IES El Rincón</span><span className="biography-institution-date">2023 - 2026</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>Professional Certificate in Web Technologies Development</p>
                                        <p><span className="biography-institution">Grupo MBC</span><span className="biography-institution-date">2019 - 2020</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>Baccalaureate</p>
                                        <p><span className="biography-institution">EASDGC</span><span className="biography-institution-date">2010 - 2012</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>High School</p>
                                        <p><span className="biography-institution">School San Vicente de Paúl</span><span className="biography-institution-date">2006 - 2010</span></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id='biography-soft-skills' className="biography-element load-animation-element">
                            <h3>How I Work <span className="education-icon">🛠️</span></h3>
                            <ul className="mindset-list">
                                <li>
                                    <p>Curiosity embodied</p>
                                    <p>I like understanding the why behind a problem before jumping into the how.</p>
                                </li>
                                <li>
                                    <p>I find a way forward</p>
                                    <p>When things get complicated, I like to organize the problem, explore different paths, and keep moving until I find a solution that works.</p>
                                </li>
                                <li>
                                    <p>Adaptable learner</p>
                                    <p>I learn fast, ask better questions over time, and stay calm when requirements shift.</p>
                                </li>
                            </ul>
                        </div>
                        <div id='biography-skills' className="biography-element load-animation-element">
                            <h3>Tech Stack <span className="education-icon">🧱</span></h3>
                            <div className="tech-stack-groups">
                                <div className="tech-stack-group">
                                    <h4>Frontend</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon="fa-brands fa-html5" style={{color:"#E54D26"}}/><span>HTML5</span></li>
                                        <li><FontAwesomeIcon icon="fa-brands fa-css3-alt" style={{color:"#379AD5"}}/><span>CSS3</span></li>
                                        <li><FontAwesomeIcon icon="fa-brands fa-sass" style={{color:"#bf4080"}}/><span>Sass</span></li>
                                        <li><FontAwesomeIcon icon="fa-brands fa-square-js" style={{color:"#f0db4f"}}/><span>JavaScript</span></li>
                                        <li><FontAwesomeIcon icon="fa-brands fa-react" style={{color:"#7cc5d9"}} /><span>React</span></li>
                                        <li><FontAwesomeIcon icon="fa-brands fa-figma" style={{color:"#A259FF"}}/><span>Figma</span></li>
                                        <li><FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" style={{color:"#4CAF50"}}/><span>Responsive Design</span></li>
                                        <li><FontAwesomeIcon icon="fa-solid fa-universal-access" style={{color:"#2196F3"}}/><span>Accessibility</span></li>
                                        <li><FontAwesomeIcon icon="fa-solid fa-palette" style={{color:"#FFC107"}}/><span>UI/UX Basics</span></li>
                                    </ul>
                                </div>
                                <div className="tech-stack-group">
                                    <h4>Backend</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon="fa-brands fa-node-js" style={{color:"#68a063"}}/><span>Node.js</span></li>
                                        <li><FontAwesomeIcon icon="fa-brands fa-php" style={{color:"#8993be"}}/><span>PHP</span></li>
                                        <li><FontAwesomeIcon icon="fa-brands fa-java" style={{color:"#f89820"}}/><span>Java</span></li>
                                        <li><FontAwesomeIcon icon="fa-brands fa-python" style={{color:"#3776AB"}}/><span>Python</span></li>
                                        <li><FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" style={{color:"#7cc5d9"}}/><span>Web Services & APIs</span></li>
                                        <li><FontAwesomeIcon icon="fa-solid fa-server" style={{color:"#9C27B0"}}/><span>REST APIs</span></li>
                                    </ul>
                                </div>
                                <div className="tech-stack-group">
                                    <h4>Development Tools</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon="fa-brands fa-git-alt" style={{color:"#F05032"}}/><span>Git</span></li>
                                        <li><FontAwesomeIcon icon="fa-brands fa-github" style={{color:"#ffffff"}}/><span>GitHub</span></li>
                                        <li><FontAwesomeIcon icon="fa-brands fa-gitlab" style={{color:"#FC6D26"}}/><span>GitLab</span></li>
                                    </ul>
                                </div>
                                <div className="tech-stack-group">
                                    <h4>Databases</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon="fa-solid fa-table" style={{color:"#C0C0C0"}}/><span>SQL</span></li>
                                        <li><FontAwesomeIcon icon="fa-solid fa-database" style={{color:"#00758F"}}/><span>MySQL</span></li>
                                        <li><FontAwesomeIcon icon="fa-solid fa-database" style={{color:"#336791"}}/><span>PostgreSQL</span></li>
                                    </ul>
                                </div>
                                <div className="tech-stack-group">
                                    <h4>E-learning</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon="fa-solid fa-graduation-cap" style={{color:"#F98012"}}/><span>Moodle</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="biography-interests" className="biography-element load-animation-element">
                            <h3>What I'm Exploring <span className="education-icon">🧪</span></h3>
                            <ul className="exploring-list">
                                <li>
                                    <p>AI-powered learning tools</p>
                                </li>
                                <li>
                                    <p>Better frontend experiences</p>
                                </li>
                                <li>
                                    <p>Useful backend systems</p>
                                </li>
                                <li>
                                    <p>Designing with real users in mind</p>
                                </li>
                                <li>
                                    <p>Interesting projects with real impact</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="know-me-more-container" className='load-animation-element'>
                    <p>Would you like to know more about me?</p>
                    <a href="#contact-container" id="know-me-more" className="button-cta card">
                        <span className="magic-background">
                            <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
                        </span>
                        <span>
                            Get in touch! ☕
                        </span>     
                    </a>
                </div>
            </article>
        </section>
    )
}
