import IS_MOBILE_TYPES from './isMobile.types';

const isMobile = (state = false, action) => {
  switch (action.type) {
    case IS_MOBILE_TYPES.IS_MOBILE:
      return (state = true);
    case IS_MOBILE_TYPES.IS_NOT_MOBILE:
      return (state = false);

    default:
      return state;
  }
};

export default isMobile;
