import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './homepage.styles.scss';
import { ReactComponent as Logo } from '../../svg/logo.svg';
import { ReactComponent as SearchIcon } from '../../svg/search-icon.svg';

const Homepage = ({ isMobile }) => {
  return (
    <div className='homepage'>
      <div className='navbar-wrapper'>
        <nav className='navbar'>
          <div className='logo-wrapper'>
            <Logo />
          </div>
          <div className='navLists'>
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
            <div className='search_icon-wrapper'>
              <SearchIcon />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isMobile: state.isMobile,
});

export default connect(mapStateToProps)(Homepage);
