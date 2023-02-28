import React from 'react';
import Task from './Task';

const TaskList = (context) => {
	const { state: { tasks }} = context;

	return tasks.map((task, key) =>
		<Task key={ key } { ...{ ...context, data: task } }/>);
};

export default TaskList;
