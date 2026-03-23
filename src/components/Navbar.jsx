import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Menu, X } from 'lucide-react';
import { personalData } from '../data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="navbar-container container">
        <a href="#home" className="navbar-logo text-gradient">
          Mohith.
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <a href={link.href} className="nav-links">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="mobile-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu glass-panel ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="mobile-nav-links"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
