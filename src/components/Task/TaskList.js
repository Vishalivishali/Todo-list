import { Box } from '@mui/material';
import React from 'react';
import AddTaskButton from './AddTaskButton';
import DeleteTaskButton from './DeleteTaskButton';

const TaskList = (context) => {
	const { state: { tasks }} = context;

	return tasks.map((task, key) =>
		<div key={ key } className="task">
			<Box>{task.name}</Box>
			<AddTaskButton { ...{ ...context, data: task } }/>
			<DeleteTaskButton { ...{ ...context, data: task } }/></div>);
};

export default TaskList;
