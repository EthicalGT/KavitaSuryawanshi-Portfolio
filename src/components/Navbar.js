import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const getBrandName = () => {
    switch (location.pathname) {
      case '/':
        return 'Dr. Kavita Suryawanshi';
      case '/aboutme':
        return 'About Me';
      case '/qualification':
        return 'Qualifications';
      case '/contributions':
        return 'Contributions';
      case '/gallery':
        return 'Gallery';
      case '/contactme':
        return 'Contact Me';
      case '/activities':
        return 'Activities';
      default:
        return 'Dr. Kavita Suryawanshi';
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <header>
      <nav className="navbar">
        <div className="nav-logo">{getBrandName()}</div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/aboutme">About Me</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/contributions">Contributions</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/qualification">Qualification</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/gallery">Gallery</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/activities">Activities</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/contactme">Contact Me</Link></li>
          </ul>
          <p id="innovator">Developed with <i class="fa-solid fa-mug-hot icon"></i> by GT</p>
        </div>
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={handleToggle}
        >
          <span />
          <span />
          <span />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
