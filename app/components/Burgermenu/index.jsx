'use client';

import { useState } from 'react';
import Link from 'next/link';
import './burger.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Varme', href: '/varme' },
    { name: 'Statistik', href: '/statistik' },
  ];

  return (
        <>
  <header className='wrapper'>
    <nav className="navbar" style={{ background: 'transparent' }}>
      <div className="container">
        
        {/* Burgermenu knap (nu først) */}
        <button
          onClick={toggleMenu}
          type="button"
          className="hamburger"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {!isOpen ? (
            <svg className="hamburgerIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="hamburgerIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>

        {/* Logo (nu sidst) */}
        <div className="logo">
          <Link href="/" onClick={closeMenu}>
            Smart Home
          </Link>
        </div>

      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="navLink"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
</header>
    </>
  );
}