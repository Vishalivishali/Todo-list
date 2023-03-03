/* eslint-disable max-len */
/* eslint-disable id-length */
import { Box, Button } from '@mui/material';
import React from 'react';
import todoManager from '../../services/todoManager';

const DeleteTodoButton = (context) => {
	const { state, setState } = context;

	return (
		<Box>
			<Button
				className="delete"
				onClick={ () =>
					setState({
						...state,
						toDos: todoManager.removeTodo(context),
					}) }
				variant="contained"
				color="error"
				size="small"
			>
				x
			</Button>
		</Box>
	);
};

export default DeleteTodoButton;
