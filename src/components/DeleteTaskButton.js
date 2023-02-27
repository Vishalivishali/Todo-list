/* eslint-disable max-len */
/* eslint-disable id-length */
import { Button } from '@mui/material';
import React from 'react';
import taskManager from '../services/taskManager';

const DeleteTaskButton = (context) => {
	const { state, setState } = context;

	return (
		<Button
			onClick={ () =>
				setState({
					...state,
					tasks: taskManager.removeTask(context),
				}) }
			variant="contained"
			color="error"
			size="small"
		>
			x
		</Button>
	);
};

export default DeleteTaskButton;
