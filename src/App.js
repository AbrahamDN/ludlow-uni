import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
