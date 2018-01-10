import * as types from './types'

const initialState = {
  value: 0
}

export function counter(state = initialState, action) {
  switch (action.type) {
    case types.INC:
      return {
        value: state.value + 1
      }
    case types.DEC:
      return {
        value: state.value - 1
      }
    case types.RESET:
      return {
        value: initialState.value
      }
    default:
      return state
  }
}