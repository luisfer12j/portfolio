import React from 'react';
import '../styles/Header.css'


const Header = () => {
    return (
        <header className='header'>
            <div className='img--container'>
                <img src="https://raw.githubusercontent.com/luisfer12j/luisfer12j.github.io/main/img/Logos-Im%C3%A1genes/main-photo-mobile-removebg.png" alt="" />
            </div>
            <div className='description--container'>
                <h1>Nando Sanchez</h1>
                <p>Web developer junior</p>
            </div>
            <ul className='social-media--container'>
                <a className='social-media--link' href="https://www.linkedin.com/in/luis-sanchez-298969148/"><i className="fa-brands fa-linkedin"></i></a>
                <a className='social-media--link' href="https://github.com/luisfer12j"><i className="fa-brands fa-github"></i></a>
            </ul>
        </header>
    );
};

export default Header;