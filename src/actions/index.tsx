import * as actionTypes from './ActionTypes';

export const startStopPressed = (timeTapped: Date) => {
  return {
    type: actionTypes.START_STOP_PRESSED,
    payload: timeTapped
  }
}