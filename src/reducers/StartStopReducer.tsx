import * as actionTypes from '../actions/ActionTypes';
import { bool } from 'prop-types';

const INITIAL_STATE = {
  isRunning: false,
  timeTapped: new Date()
};

export default (state = INITIAL_STATE, action: {type: String, payload: Date}) => {
  // console.log(action.type)
  console.log(action.payload)
  console.log(state)
  switch(action.type) {
    case actionTypes.START_STOP_PRESSED:
      return {isRunning: !state.isRunning, timeTapped: action.payload}
    default: 
      return state
  }
}