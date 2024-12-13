import { useState, useEffect } from 'react'
import '../style/nav.css'

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 40) {
                    setScrolled(true);  // Cambiar el estado si se ha hecho scroll más de 40px
                } else {
                    setScrolled(false);
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
    }, []);
    
    return(
        <nav className={scrolled?'scrolled':''}>
            <h1>Lobe</h1>
            <div className="nav-center-items">
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#Examples">Examples</a></li>
                    <li><a href="#Tour">Tour</a></li>
                    <li><a href="#Blog">Blog</a></li>
                    <li><a href="#Help">Help</a></li>
                </ul>
            </div>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </div>
            <div className={`button-download-div ` }>
                <a href="#">Download</a>
            </div>
        </nav>
    )

}

export default Nav
