import { useState } from 'react';
import '../assets/header.css';
import { navLinks } from './navLinks';

const BASE = import.meta.env.BASE_URL;

const Header = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="head">
      <a href="#home" className="brand" onClick={close}>
        <img src={`${BASE}logo.svg`} alt="" width="40" height="40" />
        <span>Start Up</span>
      </a>
      <button
        type="button"
        className="menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <img src={`${BASE}image.png`} alt="" width="32" height="32" />
      </button>
      <nav id="main-nav" aria-label="Main" className={`links${open ? ' active' : ''}`}>
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} onClick={close}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
