import React, { useState, useEffect } from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

export default function NavContainer() {
    const [ navState, setNavState ] = useState(false);

    const controllNav = (event) => {
        event.stopPropagation();
        if(!navState){
            setNavState(true);
            document.getElementById("nav-container").classList.add("nav-container-open");
            document.getElementById("nav-wrapper").classList.add("items-nav-open");
        }else{
            setNavState(false);
            document.getElementById("nav-container").classList.remove("nav-container-open");
            document.getElementById("nav-wrapper").classList.remove("items-nav-open");
        }
    }

    const addClassNameNavItems = () => {
        let time = 500;
        for (let i = 0; i < document.getElementsByClassName("li-nav-item").length; i++) {
            setTimeout(() => {
                document.getElementsByClassName("li-nav-item")[i].classList.add("animation-nav-item");
                
            }, time)
            time += 100;
        }
    }

    const scrollControl = () => {   
        for (let i = 0; i < document.getElementsByClassName("load-animation-element").length; i++) {
            let value = document.getElementsByClassName("load-animation-element")[i]
    
            if(value.getBoundingClientRect().top + value.getBoundingClientRect().height > 150 && value.getBoundingClientRect().top < window.screen.height - 70){
                value.classList.add('load-animation-element-actived');
            }else{
                value.classList.remove('load-animation-element-actived');
            }
        };
            
        const navContainer = document.getElementById("nav-container");
        const navWrapper = document.getElementById("nav-wrapper");

        if(window.scrollY >= 1) {
            navContainer.classList.add('background-actived');
            navWrapper.classList.add('background-actived');
        }else{
            navContainer.classList.remove('background-actived');
            navWrapper.classList.remove('background-actived');
        }
    }

    useEffect(() => {
        scrollControl();
        window.addEventListener('scroll', function() {
            scrollControl()
        });        
        
    }, []);

    useEffect(() => {
        addClassNameNavItems();
    }, []);

    return (
        <nav id='nav-container'>
            <div id="curtain" onClick={controllNav}></div>
            <div id="nav-wrapper">
                <div id='nav-left' className='part-nav'>
                    <a href='.' id='link-home'>
                        <img className='magic-background' id='imagen-nav' src='/extraterrestre.png' alt='alien-cabecera'></img>
                        <div>
                            <p className="nav-myname nav-myname-name">Allan Espinoza</p>
                            <p className="nav-myname nav-myname-desc">$ Web Developer</p>
                        </div>
                    </a>
                    <div id='wrapper-button-nav-drawer'>
                        <button type="button" onClick={controllNav} id='button-nav-drawer' className={!navState ? "part-nav" : "part-nav button-pressed"} >
                            <FontAwesomeIcon icon={!navState ? "fa-solid fa-bars" : "fa-solid fa-xmark"} size='xl'/>
                        </button>                        
                    </div>
                </div>
                <div id='nav-right' className="part-nav menu-dropdown">
                    <ul>
                        <li className='li-nav-item'>
                            <Link onClick={controllNav} offset={-200} className="nav-item" activeClass="actived-link" spy to="home-container" smooth={true} duration={100}>
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon="fa-solid fa-house-chimney" size='lg'/>
                                </span>
                                <span className='magic-underline'>Home</span>
                            </Link>
                        </li>
                        <li className='li-nav-item'>
                            <Link onClick={controllNav} offset={0} className="nav-item" activeClass="actived-link" spy to="about-container" smooth={true} duration={100}>
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon="fa-solid fa-address-card" size='lg'/>
                                </span>
                                <span className='magic-underline'>About</span>
                            </Link>
                        </li>
                        <li className='li-nav-item'>
                            <Link onClick={controllNav} offset={0} className="nav-item" activeClass="actived-link" spy to="timeline-container" smooth={true} duration={100}>
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon="fa-solid fa-house-chimney" size='lg'/>
                                </span>
                                <span className='magic-underline'>Timeline</span>
                            </Link>
                        </li>
                        <li className='li-nav-item'>
                            <Link onClick={controllNav} offset={0} className="nav-item" activeClass="actived-link" spy to="work-container" smooth={true} duration={100}>
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon="fa-solid fa-history" size='lg'/>
                                </span>
                                <span className='magic-underline'>Projects</span>
                            </Link>
                        </li>
                        <li className='li-nav-item'>
                            <Link onClick={controllNav} offset={0} className="nav-item" activeClass="actived-link" spy to="contact-container" smooth={true} duration={100}>
                                <span className='icon-container'>
                                    <FontAwesomeIcon icon="fa-solid fa-comments" size='lg'/>
                                </span>
                                <span className='magic-underline'>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
