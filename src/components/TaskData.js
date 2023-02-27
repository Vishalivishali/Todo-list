import { Box } from '@mui/material';
import React from 'react';
import Add from './Add';
import Delete from './Delete';

const TaskData = (context) => {
	const { state: { tasks }} = context;

	return tasks.map((task, key) =>
		<div key={ key } className="name">
			<Box>{task.name}</Box>
			<Add { ...{ ...context, data: task } }/>
			<Delete { ...{ ...context, data: task } }/></div>);
};

export default TaskData;
