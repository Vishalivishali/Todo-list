import { Box } from '@mui/material';
import React from 'react';
import AddTodoButton from './AddTodoButton';
import EditTodoButton from './EditTodoButton';

const ActionButton = (context) => {
	const { state: { isEdit }} = context;

	return (
		<Box>
			{isEdit
				? <EditTodoButton { ...context }/>
				: <AddTodoButton { ...context }/>}
		</Box>
	);
};

export default ActionButton;
