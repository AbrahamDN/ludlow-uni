import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  isMobileAction,
  isNotMobileAction,
} from './redux/isMobile/isMobile.action';

import './App.scss';

import Navbar from './components/navbar/navbar.component';
import Homepage from './pages/homepage/homepage.component';
import Footer from './pages/footer/footer.component';

const App = ({ dispatchIsMobile, dispatchIsNotMobile }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    if (windowSize <= 650) dispatchIsMobile();
    else dispatchIsNotMobile();
  }, [windowSize, dispatchIsMobile, dispatchIsNotMobile]);

  return (
    <div className='App'>
      <div className='navbar-wrapper'>
        <Navbar />
      </div>
      <div className='page-wrapper'>
        <Switch>
          <Route path='/' component={Homepage} />
        </Switch>
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchIsNotMobile: () => dispatch(isNotMobileAction),
  dispatchIsMobile: () => dispatch(isMobileAction),
});

export default connect(null, mapDispatchToProps)(App);
