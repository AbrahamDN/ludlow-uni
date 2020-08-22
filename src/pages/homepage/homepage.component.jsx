import React from 'react';
import { connect } from 'react-redux';

import './homepage.styles.scss';
import Card from '../../components/card/card.component';

const Homepage = ({ isMobile }) => {
  const mapCardComponents = data => {
    return data.map((cardProps, i) => <Card key={'card' + i} {...cardProps} />);
  };

  return (
    <div className={`homepage ${isMobile ? 'mobile' : ''}`}>
      <header className='header'>
        <div className='header-content'>
          <div>
            <h1>Student Life</h1>
            <br />
            <br />
            <h2>
              There is so much going on at Ludlow University, both on and off
              campus.
            </h2>
            <br />
            <br />
            <div className='info'>
              <h3>Lisa Smith</h3>
              <p>Student, BSc (Hons) Computer Games Design</p>
            </div>
            <br />
            <br />
            <button>View student stories</button>
          </div>
        </div>
        <div className='header-hero'>
          <div>
            <img
              className='hero-img'
              src='/assets/jpg/hero-image.jpg'
              alt='Hero'
            />
          </div>
        </div>
      </header>

      <section className='cards-section'>
        <div className='blog-section'>
          <div className='card-wrapper'>{mapCardComponents(BLOGS_DATA)}</div>
        </div>
      </section>

      <section>
        <h1>Section</h1>
      </section>

      <section>
        <h1>Section</h1>
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
    type: 'blog',
  },
  {
    image: '/assets/jpg/accommodation.jpg',
    title: 'Accommodation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    type: 'blog',
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

const EVENTS_DATA = [
  {
    image: '/assets/jpg/event_image-1.jpg',
    title: 'Ludlow campus rock festival 2019',
    date: { day: '01', month: 'AUG' },
    type: 'event',
  },
  {
    image: '/assets/jpg/event_image-2.jpg',
    title: '2019 game design exhibition',
    date: { day: '14', month: 'AUG' },
    type: 'event',
  },
  {
    image: '/assets/jpg/event_image-3.jpg',
    title: 'Study collaboration session ',
    date: { day: '21', month: 'AUG' },
    type: 'event',
  },
];

const mapStateToProps = state => ({
  isMobile: state.isMobile,
});
export default connect(mapStateToProps)(Homepage);

/*
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

      <section className='events-section'>
        <div className={isMobile ? 'mobile' : ''}>
          <h2>Upcoming events</h2>
          <button>View all events</button>
        </div>
        <div className={`card-wrapper ${isMobile ? 'mobile' : ''}`}>
          {mapCardComponents(EVENTS_DATA)}
        </div>
      </section>
*/
