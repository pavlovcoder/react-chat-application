import appReducer from './app';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  app: appReducer,
});

export default rootReducer;
