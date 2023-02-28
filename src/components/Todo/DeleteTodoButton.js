/* eslint-disable max-len */
/* eslint-disable id-length */
import { Button } from '@mui/material';
import React from 'react';
import todoManager from '../../services/todoManager';

const DeleteTodoButton = (context) => {
	const { state, setState } = context;

	return (
		<Button
			onClick={ () =>
				setState({
					...state,
					toDos: todoManager.remove(context),
				}) }
			variant="contained"
			color="error"
			size="small"
		>
			x
		</Button>
	);
};

export default DeleteTodoButton;
