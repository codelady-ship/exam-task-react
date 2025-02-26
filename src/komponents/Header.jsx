import React from 'react';
import '../assets/header.css';
const Header = () => {
  function dropdown() {
    document.querySelector('.contact-dropdown').classList.toggle('active');
  }
  function menu(){
    document.querySelector('.links').classList.toggle('active');
  }
  return (
    <div className="head">
      <img src="./vite.svg" alt="logo" />
      <div className="links">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">SERVICES</a>
        <a href="#">FEATURES</a>
        <section className="contact-dropdown" onClick={dropdown}>
          <div className='contact'>Contact us <img src="emoji.png" alt="emoji"/></div>
          <ul className="dropdown-menu">
            <li><a href="tel:+1234567890">Phone</a></li>
            <li><a href="mailto:example@example.com">Email</a></li>
            <li><a href="https://t.me/username" target="_blank">Telegram</a></li>
            <li><a href="https://instagram.com/username" target="_blank">Instagram</a></li>
          </ul>
        </section>
        <a href="#">PRICING</a>
      </div>
      <img src="public/image.png" alt="icon-menu" className='menu' onClick={menu}/>
    </div>
  );
};

export default Header;
