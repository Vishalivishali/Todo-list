import { Box } from '@mui/material';
import React from 'react';
import Task from './Task';

const TaskList = (context) => {
	const { state: { tasks }} = context;

	return <Box className="task">
		{tasks.map((task, key) =>
			<Task key={ key } { ...{ ...context, data: task } }/>)}
	</Box>;
};

export default TaskList;
