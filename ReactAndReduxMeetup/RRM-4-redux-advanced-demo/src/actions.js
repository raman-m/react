import * as types from './types';

export function fetchTasks() {
  return {
    type: types.FIND_ALL
  };
}
