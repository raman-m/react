import * as types from './types';
import {executeRequest} from './api';

export function fetchTasks() {
  return dispatch => {
    dispatch(findAll());
    executeRequest('/Tasks')
      .then(data => dispatch(findAllSuccess(data)))
      .catch(err => dispatch(findAllError(err)));
  };
}

function findAll() {
  return {
    type: types.FIND_ALL
  };
}

function findAllSuccess(tasks) {
  return {
    type: types.FIND_ALL_SUCCESS,
    tasks
  };
}

function findAllError(err) {
  return {
    type: types.FIND_ALL_ERROR,
    error: err.message || ""
  };
}
