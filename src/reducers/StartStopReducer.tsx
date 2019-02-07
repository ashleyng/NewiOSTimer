import * as actionTypes from '../actions/ActionTypes';
import { bool, number } from 'prop-types';
import TimeFormatter from 'minutes-seconds-milliseconds'

const INITIAL_STATE = {
  isRunning: false,
  startTime: null,
  timer: 0
};

export default (state = INITIAL_STATE, action: {type: String, payload: Date}) => {
  // console.log(action.payload)
  switch(action.type) {
    case actionTypes.START_PRESSED:
      return {...state, isRunning: !state.isRunning, startTime: action.payload }
    case actionTypes.STOP_PRESSED:
      return {...state, isRunning: !state.isRunning}
    case actionTypes.TIMER_INTERVAL:
      let timer = TimeFormatter(action.payload - state.startTime + state.timer)
      console.log(timer)
      return {...state, timer}
    default: 
      return state
  }
}