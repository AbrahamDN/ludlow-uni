import { combineReducers } from 'redux';

import isMobile from './isMobile/isMobile.reducer';

const rootReducer = combineReducers({
  isMobile,
});

export default rootReducer;
