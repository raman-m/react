import {createStore, combineReducers, applyMiddleware} from 'redux'
import {counter} from './reducer'
import {createLogger} from 'redux-logger'

// const initialState = {
//   counter: {
//     value: 0
//   }
// }

const logger = createLogger({
  diff: true
})

const reducers = combineReducers({
  counter
})

export const store = createStore(reducers, applyMiddleware(logger))