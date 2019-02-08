import * as actionTypes from '../actions/ActionTypes';
import TimeFormatter from 'minutes-seconds-milliseconds'

const INITIAL_STATE = {
  isRunning: false,
  startTime: null,
  timer: 0,
  offset: 0,
  laps: {},
  lapCount: 1
};

export default (state = INITIAL_STATE, action: {type: String, payload: Date}) => {
  switch(action.type) {
    case actionTypes.START_PRESSED:
      return {...state, isRunning: !state.isRunning, startTime: action.payload, offset: state.timer }
    case actionTypes.STOP_PRESSED:
      return {...state, isRunning: !state.isRunning}
    case actionTypes.RESET_PRESSED:
      return INITIAL_STATE
    case actionTypes.LAP_PRESSED:
      return {...state, lapCount: state.lapCount + 1}
    case actionTypes.TIMER_INTERVAL:
      let timer: number = action.payload - state.startTime + state.offset
      let lapCopy = state.laps
      let lap = {name: `Lap ${state.lapCount}`, value: TimeFormatter(timer)}
      lapCopy[`Lap ${state.lapCount}`] = lap // TODO: not the correct lap time yet
      return {...state, timer, laps: lapCopy}
    default: 
      return state
  }
}