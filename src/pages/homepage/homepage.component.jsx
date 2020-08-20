import React from 'react';
import { connect } from 'react-redux';
import './homepage.styles.scss';

const Homepage = ({ isMobile }) => {
  return (
    <div className='homepage'>
      <header className='header'>
        <div className='header-content'>
          <div className='header-content-wrap'>
            <h1>Student Life</h1>
            <h2>
              There is so much going on at Ludlow University, both on and off
              campus.
            </h2>
            <div className='info'>
              <h3>Lisa Smith</h3>
              <p>Student, BSc (Hons) Computer Games Design</p>
            </div>
            <button>View student stories</button>
          </div>
        </div>
        <div className={`header-hero ${isMobile ? 'first_grid' : ''}`}>
          <div className='hero-content'>
            <img
              className='hero-img'
              src='/assets/jpg/hero-image.jpg'
              alt='Hero'
            />
          </div>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
  isMobile: state.isMobile,
});
export default connect(mapStateToProps)(Homepage);
