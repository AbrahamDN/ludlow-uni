import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import './card.styles.scss';

const Card = ({ isMobile, image, title, description, type = 'blog' }) => {
  console.log(typeof image);
  return (
    <div>
      <div className='card'>
        <div className='card-wrap'>
          <div
            className='card-img'
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
          <div className={`card-content ${isMobile ? 'mobile' : ''}`}>
            <Link to='/'>
              <h3>{title}</h3>
            </Link>
            <p>{description.substr(0, 125)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isMobile: state.isMobile,
});
export default connect(mapStateToProps)(Card);
