import { combineReducers } from 'redux';
import StartStopReducer from './StartStopReducer';

export default combineReducers({
  startStopButton: StartStopReducer,
});