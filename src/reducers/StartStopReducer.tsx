import * as actionTypes from '../actions/ActionTypes';
import { bool, number } from 'prop-types';
import TimeFormatter from 'minutes-seconds-milliseconds'

const INITIAL_STATE = {
  isRunning: false,
  startTime: null,
  timer: 0,
  offset: 0
};

export default (state = INITIAL_STATE, action: {type: String, payload: Date}) => {
  switch(action.type) {
    case actionTypes.START_PRESSED:
      return {...state, isRunning: !state.isRunning, startTime: action.payload, offset: state.timer }
    case actionTypes.STOP_PRESSED:
      return {...state, isRunning: !state.isRunning}
    case actionTypes.TIMER_INTERVAL:
      let timer: number = action.payload - state.startTime + state.offset
      return {...state, timer}
    default: 
      return state
  }
}