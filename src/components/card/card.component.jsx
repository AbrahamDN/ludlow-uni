import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import './card.styles.scss';

const Card = ({ isMobile, image, title, description, date, type }) => {
  return (
    <div>
      <div className='card'>
        <div className={'card-wrap ' + type}>
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

          <div className={`card-content ${isMobile ? 'mobile' : ''}`}>
            <Link to='/'>
              {type === 'event' ? <h2>{title}</h2> : <h3>{title}</h3>}
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
