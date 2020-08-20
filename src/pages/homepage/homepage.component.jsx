import React from 'react';
import { connect } from 'react-redux';

import './homepage.styles.scss';
import Card from '../../components/card/card.component';

const Homepage = ({ isMobile }) => {
  const mapCardComponents = data => {
    return data.map((cardProps, i) => <Card key={'card' + i} {...cardProps} />);
  };

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

      <section className='blog-section'>
        <div className={`card-wrapper ${isMobile ? 'mobile' : ''}`}>
          {mapCardComponents(BLOGS_DATA)}
        </div>
      </section>

      <section className='articles-section'>
        <div className={`card-wrapper ${isMobile ? 'mobile' : ''}`}>
          {mapCardComponents(ARTICLES_DATA)}
        </div>
      </section>

      <section className='cta_banner-section'>
        <div className={isMobile ? 'mobile' : ''}>
          <hr />
          <h2>
            Come along to one of our Open Days and find out everything you need
            to know about the campus, courses, and facilities
          </h2>
          <button>Book an Open Day</button>
        </div>
      </section>
    </div>
  );
};

const BLOGS_DATA = [
  {
    image: '/assets/jpg/activities_and_clubs.jpg',
    title: 'Activities and clubs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    image: '/assets/jpg/accommodation.jpg',
    title: 'Accommodation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
];

const ARTICLES_DATA = [
  {
    image: '/assets/jpg/chat-to-student.jpg',
    title: 'Chat to a student',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    type: 'article',
  },
  {
    image: '/assets/jpg/support.jpg',
    title: 'Support',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    type: 'article',
  },
  {
    image: '/assets/jpg/life-in-ludlow.jpg',
    title: 'Life in Ludlow',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    type: 'article',
  },
];

const mapStateToProps = state => ({
  isMobile: state.isMobile,
});
export default connect(mapStateToProps)(Homepage);
