import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  isMobileAction,
  isNotMobileAction,
} from './redux/isMobile/isMobile.action';

import './App.scss';

import Homepage from './pages/homepage/homepage.component';

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
      <Switch>
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchIsNotMobile: () => dispatch(isNotMobileAction),
  dispatchIsMobile: () => dispatch(isMobileAction),
});

export default connect(null, mapDispatchToProps)(App);
