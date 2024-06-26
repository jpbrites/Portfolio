import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import logo from '../../assets/logoat.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuIconRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    }

    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMenuClick = () => {
    setTimeout(() => {
      setShowMenu(!showMenu);
    }, 100);
  };

  const handleNavLinkClick = (target) => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setShowMenu(false);
    }
  };

  

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navbar-links_container'>
          <p><a onClick={() => handleNavLinkClick('home')}>Home</a></p>
          <p><a onClick={() => handleNavLinkClick('about')}>About</a></p>
          <p><a onClick={() => handleNavLinkClick('skills')}>Skills</a></p>
          <p><a onClick={() => handleNavLinkClick('projects')}>Portfolio</a></p>
          <p><a onClick={() => handleNavLinkClick('contact')}>Contact</a></p>
        </div>
      </div>
      <div
        className='navbar-icon'
        ref={menuIconRef}
        onClick={handleMenuClick}
      >
        {showMenu ? <RiCloseLine style={{cursor: 'pointer'}} /> : <RiMenu3Line size={33} style={{cursor: 'pointer'}} />}
      </div>

      {showMenu && (
        <div className='navbar-menu-overlay'>
        <div className='navbar-menu' ref={menuRef}>
          <RiCloseLine style={{cursor: 'pointer'}} size={25} onClick={() => setShowMenu(false)} className='icon-close' />
          <div className='navbar-menu-itens'>
            <p><a onClick={() => handleNavLinkClick('home')}>Home</a></p>
            <p><a onClick={() => handleNavLinkClick('about')}>About</a></p>
            <p><a onClick={() => handleNavLinkClick('skills')}>Skills</a></p>
            <p><a onClick={() => handleNavLinkClick('projects')}>Portfolio</a></p>
            <p><a onClick={() => handleNavLinkClick('contact')}>Contact</a></p>
          </div>
        </div>
        </div>

      )}
    </div>
  );
}

export default Navbar;
