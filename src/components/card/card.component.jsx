import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import arrow from '../../svg/arrow.svg';

import './card.styles.scss';

const Card = ({ isMobile, image, title, description, date, type = 'blog' }) => {
  return (
    <div>
      <div className={`card ${isMobile ? 'mobile' : ''}`}>
        <div className={`card-wrap ${type || ''}`}>
          {date ? (
            <div className='card-date'>
              <h1>{date.day}</h1>
              <h2>{date.month}</h2>
            </div>
          ) : null}

          <div
            className='card-img'
            style={{
              backgroundImage: `url(${image})`,
            }}
          />

          <div className='card-content'>
            <Link to='/'>
              {type === 'event' ? (
                <h2>{title}</h2>
              ) : (
                <span>
                  <h3>{title}</h3>
                  <img src={arrow} alt='Arrow' />
                </span>
              )}
            </Link>
            {description ? <p>{description.substr(0, 125)}</p> : null}
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
