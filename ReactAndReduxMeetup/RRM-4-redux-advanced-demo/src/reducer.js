import * as types from './types';

const initialState = {
  isFetching: false,
  error: "",
  items: []
};

export function tasks(state = initialState, action) {
  switch(action.type) {
  case types.FIND_ALL:
    return {
      ...state,
      isFetching: true
    };
  case types.FIND_ALL_SUCCESS:
    return {
      ...state,
      isFetching: false,
      items: action.tasks
    };
  case types.FIND_ALL_ERROR:
    return {
      ...state,
      isFetching: false,
      error: action.errorMessage
    };
  default:
    return state;
  }
}
