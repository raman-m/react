import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {tasks} from './reducer';
import createSagaMiddleware from 'redux-saga';
// import {fetchTasksSaga} from './sagas';

const logger = createLogger({
  diff: true
});

// const saga = createSagaMiddleware();

const middlewares = applyMiddleware(
  thunk, // saga,
  logger
);

const reducers = combineReducers({
  tasks
});

export const store = createStore(reducers, middlewares);

// saga.run(fetchTasksSaga);
