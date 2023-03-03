/* eslint-disable max-len */
import React from 'react';
import { Box, Button } from '@mui/material';
import taskManager from '../../services/taskManager';

const AddTaskButton = (context) => {
	const { setState, state: { toDos }, data: task } = context;

	return (
		<Box>
			<Button
				sx={ { display: 'inline-block' } }
				onClick={ () =>
					setState((state) => ({ ...state,
						toDos: [...toDos, { ...task, isChecked: false }],
						tasks: taskManager.removeTask(context) })) }
				color="secondary"
				size="small"
			>
				+ Add
			</Button>
		</Box>
	);
};

export default AddTaskButton;
