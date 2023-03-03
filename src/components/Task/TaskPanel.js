import { Box } from '@mui/material';
import React from 'react';
import TaskList from './TaskList';

const TaskPanel = (context) =>
	<Box>
		<TaskList { ...context }/>
	</Box>;

export default TaskPanel;
