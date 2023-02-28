import React from 'react';
import TaskList from './TaskList';

const TaskPanel = (context) =>
	<div>
		<TaskList { ...context }/>
	</div>;

export default TaskPanel;
