import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState , useEffect } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3  from '../assets/img/nav-icon3.svg'
import navIcon4  from '../assets/img/github.png'
import curlLogo from "../assets/img/curllogo.png";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll",onScroll)
        return () => window.removeEventListener("scroll",onScroll)
    }, [])


    const onUpdateActiveLink =(value) =>
{
    setActiveLink(value);
}

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
            <Container >
                <Navbar.Brand href="#home" className=' d-lg-none d-md-block'>
                <img src={curlLogo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/mandeera-basnet-2618661a6/'><img src={navIcon1} alt='' /></a>
                            <a href='https://www.facebook.com/mandeera.basnet.5/'><img src={navIcon2} alt='' /></a>
                            <a href='https://www.instagram.com/me_mandeera/'><img src={navIcon3} alt='' /></a>
                            <a href='https://github.com/ma-bt'><img src={navIcon4} alt='' /></a>
                        </div>
                        
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;


