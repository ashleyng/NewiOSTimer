import * as actionTypes from './ActionTypes';

export const startPressed = (payload: Date) => {
  // console.log(payload)
  return {
    type: actionTypes.START_PRESSED,
    payload: payload
  }
}

export const stopPressed = () => {
  return {
    type: actionTypes.STOP_PRESSED
  }
}

export const timerInterval = (payload: Date) => {
  return {
    type: actionTypes.TIMER_INTERVAL,
    payload: payload
  }
}

export const resetPressed = () => {
  return {
    type: actionTypes.RESET_PRESSED
  }
}