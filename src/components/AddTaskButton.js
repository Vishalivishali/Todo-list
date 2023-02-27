/* eslint-disable max-len */
import React from 'react';
import { Button, Box } from '@mui/material';
import taskManager from '../services/taskManager';

const AddTaskButton = (context) => {
	const { setState, state: { toDos }, data: task } = context;

	return (
		<Box>
			<Button
				onClick={ () =>
					setState((state) => ({ ...state,
						toDos: [...toDos, { ...task, isChecked: false }],
						tasks: taskManager.removeTask(context) })) }
				variant="contained"
				color="error"
				size="small"
			>
				+
			</Button>
		</Box>
	);
};

export default AddTaskButton;
