import React from 'react';
import './Timeline.css';
import grupo_mbc from '../../assets/timeline/grupo_mbc.jpg';
import self_taught from '../../assets/timeline/self-taught.jpg';
import learning from '../../assets/timeline/learning.jpg';
import ieselrincon from '../../assets/timeline/ieselrincon.png';
import ayesa from '../../assets/timeline/ayesa.jpg';

export default function Timeline(){
    return (
        // TODO: Añadir un hover en cada elemento para poder leerlo mejor (letra mas grande)
        <section id='timeline-container' className='component'>
            <h2 className='magic-background-underline load-animation-element'>What I've been doing...</h2>
            <article id="timeline-wrap" className='load-animation-element'>
                <ul>
                    <li className="timeline-element load-animation-element">
                        <div className="timeline-element-image">
                            <img src={self_taught} alt='self_taught'/>
                        </div>
                        <div className="timeline-element-description">
                            <span>Before 2019</span>
                            <h3 className="magic-underline">Self-Taught Developer</h3>
                            <p>
                                My interest in web development began early, but in 2019 I decided to turn that
                                passion into a professional career.
                            </p>
                        </div>
                    </li>
                    <li className="timeline-element load-animation-element">
                        <div className="timeline-element-image">
                            <img src={learning} alt='learning'/>
                        </div>
                        <div className="timeline-element-description">
                            <span>2019 - 2020</span>
                            <h3 className="magic-underline">Professional Certificate in Web Application Development</h3>
                            <p>
                                In 2020, I completed my training at Grupo MBC, gaining a solid foundation in
                                web application development and modern web technologies.
                            </p>
                        </div>
                    </li>
                    <li className="timeline-element load-animation-element">
                        <div className="timeline-element-image">
                            <img src={grupo_mbc} alt='grupo_mbc'/>
                        </div>
                        <div className="timeline-element-description">
                            <span>2020 - 2023</span>
                            <h3 className="magic-underline">Web Developer at Grupo MBC</h3>
                            <p>
                                After completing the program, I joined Grupo MBC as a web developer, creating
                                and maintaining Moodle-based learning platforms for Gran Canaria and Tenerife.
                            </p>
                        </div>
                    </li>
                    <li className="timeline-element load-animation-element">
                        <div className="timeline-element-image">
                            <img src={ieselrincon} alt='ieselrincon'/>
                        </div>
                        <div className="timeline-element-description">
                            <span>2023 - 2026</span>
                            <h3 className="magic-underline">Higher Technician in Web Application Development</h3>
                            <p>
                                While working as a web developer, I completed my Higher Technician degree in Web 
                                Application Development in IES El Rincón, strengthening my full-stack skills and 
                                applying them directly to real-world projects.
                            </p>
                        </div>
                    </li>
                    <li className="timeline-element load-animation-element">
                        <div className="timeline-element-image">
                            <img src={ayesa} alt='ayesa'/>
                        </div>
                        <div className="timeline-element-description">
                            <span>2023 - Present</span>
                            <h3 className="magic-underline">Web Developer at Ayesa</h3>
                            <p>
                                Alongside starting my Higher Technician degree in Web Application Development
                                in 2023, I joined Ayesa as a web developer, working on Moodle projects for
                                Andalusia and Rey Juan Carlos University, where I continue to work today.
                            </p>
                        </div>
                    </li>
                </ul>
            </article>
        </section>
    )
}
