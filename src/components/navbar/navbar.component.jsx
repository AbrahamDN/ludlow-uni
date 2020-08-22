import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../svg/logo.svg';
import { ReactComponent as SearchIcon } from '../../svg/search-icon.svg';

import './navbar.styles.scss';

const Navbar = ({ isMobile }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef();

  useEffect(() => {
    const menuBtn = menuBtnRef.current;
    if (menuOpen) menuBtn.classList.add('open');
    if (menuBtn && !menuOpen) menuBtn.classList.remove('open');
  }, [menuOpen]);

  const navLinks = (
    <ul>
      <li>
        <Link to='/'>Study</Link>
      </li>
      <li>
        <Link to='/'>Research</Link>
      </li>
      <li>
        <Link to='/'>About us</Link>
      </li>
    </ul>
  );

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='Logo' />
        </Link>
      </div>
      <div className='navLists'>
        {isMobile ? (
          <div className='menu'>
            <div
              className='menu-btn'
              ref={menuBtnRef}
              onClick={() => setMenuOpen(!menuOpen)}>
              <div className='menu-btn_burger'></div>
            </div>
            <div className={`menu-navLinks ${menuOpen ? 'open' : 'close'}`}>
              {menuOpen ? navLinks : null}
            </div>
          </div>
        ) : (
          navLinks
        )}
        <div className='search_icon-wrapper'>
          <SearchIcon />
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  isMobile: state.isMobile,
});

export default connect(mapStateToProps)(Navbar);
