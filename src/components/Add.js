/* eslint-disable max-len */
import React from 'react';
import { Button, Box } from '@mui/material';
import todoManager from '../services/todoManager';

const Add = (context) => {
	const { setState, state: { toDos }, data: task } = context;

	return (
		<Box>
			<Button
				onClick={ () =>
					setState((state) => ({ ...state,
						toDos: [...toDos, task],
						tasks: todoManager.removeName(context) })) }
				variant="contained"
				color="error"
				size="small"
			>
				+
			</Button>
		</Box>
	);
};

export default Add;
