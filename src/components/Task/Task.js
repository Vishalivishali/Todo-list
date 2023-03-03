import { Box } from '@mui/material';
import React from 'react';
import AddTaskButton from './AddTaskButton';
import DeleteTaskButton from './DeleteTaskButton';

const Task = (context) => {
	const { data: task } = context;

	return (
		<Box className="taskContainer">
			<Box className="taskInput">{task.name}</Box>
			<AddTaskButton { ...{ ...context, data: task } }/>
			<DeleteTaskButton { ...{ ...context, data: task } }/></Box>);
};

export default Task;
