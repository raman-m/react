import * as types from './types'

export function inc() {
  return {
    type: types.INC, 
  }
}

export function dec() {
  return {
    type: types.DEC
  }
}

export function reset() {
  return {
    type: types.RESET
  }
}
