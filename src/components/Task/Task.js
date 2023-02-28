import { Box } from '@mui/material';
import React from 'react';
import AddTaskButton from './AddTaskButton';
import DeleteTaskButton from './DeleteTaskButton';

const Task = (context) => {
	const { data: task } = context;

	return (
		<div>
			<Box>{task.name}</Box>
			<AddTaskButton { ...{ ...context, data: task } }/>
			<DeleteTaskButton { ...{ ...context, data: task } }/></div>);
};

export default Task;
