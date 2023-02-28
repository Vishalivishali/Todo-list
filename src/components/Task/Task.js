import React from 'react';
import TaskList from './TaskList';

const Task = (context) =>
	<div>
		<TaskList { ...context }/>
	</div>;

export default Task;
