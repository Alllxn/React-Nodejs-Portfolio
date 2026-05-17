import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLanguage } from '../../context/LanguageContext';

export default function About() {
    const { t } = useLanguage();
    const a = t.about;

    return (
        <section id='about-container' className='component'>
            <h2 className='magic-background-underline load-animation-element'>{a.title}</h2>
            <article id='about-presentation'>
                <div id='biography' className=''>
                    <div id="biography-intro" className="biography-element load-animation-element">
                        <div className="about-intro-marker magic-background">
                            <img src='/extraterrestre.png' alt='alien'></img>
                        </div>
                        <div className="about-intro-copy">
                            <span className="about-intro-label">{a.label}</span>
                            {a.bio.map((paragraph, i) => (
                                <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                            ))}
                        </div>
                    </div>
                    <div id="biography-more-info">
                        <div id="biography-education" className="biography-element load-animation-element">
                            <h3>{a.education.title}</h3>
                            <ul className="education-list">
                                {a.education.items.map((item, i) => (
                                    <li key={i}>
                                        <div>
                                            <p>{item.degree}</p>
                                            <p>
                                                <span className="biography-institution">{item.institution}</span>
                                                <span className="biography-institution-date">{item.date}</span>
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div id='biography-soft-skills' className="biography-element load-animation-element">
                            <h3>{a.softSkills.title}</h3>
                            <ul className="mindset-list">
                                {a.softSkills.items.map((item, i) => (
                                    <li key={i}>
                                        <p>{item.title}</p>
                                        <p>{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div id='biography-skills' className="biography-element load-animation-element">
                            <h3>{a.techStack.title}</h3>
                            <div className="tech-stack-groups">
                                <div className="tech-stack-group">
                                    <h4>{a.techStack.frontend}</h4>
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
                                    <h4>{a.techStack.backend}</h4>
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
                                    <h4>{a.techStack.tools}</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon="fa-brands fa-git-alt" style={{color:"#F05032"}}/><span>Git</span></li>
                                        <li><FontAwesomeIcon icon="fa-brands fa-github" style={{color:"#ffffff"}}/><span>GitHub</span></li>
                                        <li><FontAwesomeIcon icon="fa-brands fa-gitlab" style={{color:"#FC6D26"}}/><span>GitLab</span></li>
                                    </ul>
                                </div>
                                <div className="tech-stack-group">
                                    <h4>{a.techStack.databases}</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon="fa-solid fa-table" style={{color:"#C0C0C0"}}/><span>SQL</span></li>
                                        <li><FontAwesomeIcon icon="fa-solid fa-database" style={{color:"#00758F"}}/><span>MySQL</span></li>
                                        <li><FontAwesomeIcon icon="fa-solid fa-database" style={{color:"#336791"}}/><span>PostgreSQL</span></li>
                                    </ul>
                                </div>
                                <div className="tech-stack-group">
                                    <h4>{a.techStack.elearning}</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon="fa-solid fa-graduation-cap" style={{color:"#F98012"}}/><span>Moodle</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="biography-interests" className="biography-element load-animation-element">
                            <h3>{a.exploring.title}</h3>
                            <ul className="exploring-list">
                                {a.exploring.items.map((item, i) => (
                                    <li key={i}><p>{item}</p></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="know-me-more-container" className='load-animation-element'>
                    <p>{a.cta.text}</p>
                    <a href="#contact-container" id="know-me-more" className="button-cta card">
                        <span className="magic-background">
                            <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
                        </span>
                        <span>
                            {a.cta.button}
                        </span>
                    </a>
                </div>
            </article>
        </section>
    )
}
