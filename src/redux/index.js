import { createStore, compose, combineReducers } from 'redux';
import user from './user';
import notification from './notification';

const rootReducer = combineReducers({ user, notification });

const initialState = {}

export default createStore(
  rootReducer, 
  initialState, 
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) 
);