import * as actionTypes from '../actions/ActionTypes';

export default (state: boolean = false, action: {type: String}) => {
  console.log(action.type)
  console.log(state)
  switch(action.type) {
    case actionTypes.START_STOP_PRESSED:
      return !state
    default: 
      return state
  }
}