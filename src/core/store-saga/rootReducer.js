import { combineReducers } from 'redux';
import sampleSagaReducer from 'app/sample-saga/reducers';
import { TypicodeUsers } from 'app/users/store';
import { Unsplash } from 'app/unsplash/store';
// import todos from './todos'
// import counter from './counter'

export default combineReducers({
  sampleSagaReducer,
  TypicodeUsers,
  Unsplash
  // todos,
  // counter
});
