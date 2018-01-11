import React from 'react';
import {connect} from 'react-redux';
import * as actions from './thunks';
/* import * as actions from './actions';
 * */
const TaskList = ({tasks, isFetching, fetchTasks}) => (
  <div>
    <ul>
      {
        isFetching
        ? "loading..."
        : tasks && tasks.map((task, id) => (
          <li key={id}>
            <input type="checkbox" checked={task.complete} /> {task.title}
          </li>
        ))
      }
    </ul>
    <button onClick={fetchTasks}>Fetch tasks</button>
  </div>
);

const mapStateToProps = state => ({
  tasks: state.tasks.items,
  isFetching: state.tasks.isFetching
});


const ConnectedTaskList = connect(mapStateToProps, actions)(TaskList);

export default ConnectedTaskList;
