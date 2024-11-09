import React from 'react';
import logo from '../images/logo.png'
import banner from '../images/banner.png'
import '../index.css';


export default function Header() {
  return (
    <div id='home'>
      <nav className="bgcolor">
        <div className="navbar container-head">
          <div className='logodiv'>
            <img class='logo' src={logo} alt="logo" />
          </div>
          <div className="pages" id="navbarSupportedContent">
            <ul className="navbar-ul">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#program">Program</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#campus">Campus</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link button" href="#contact">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='banner-section container-haed'>
        <div className='banner-text'>
          <h1>We Ensure better education for a better world</h1>
          <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
          <a className='button'>Explore more</a>
        </div>
      </div>

      {window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 12) {
          navbar.classList.add('sticky');
        } else {
          navbar.classList.remove('sticky');
        }
      })}
    </div>
  );
}
