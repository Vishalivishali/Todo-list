/* eslint-disable max-len */
/* eslint-disable id-length */
import { Button } from '@mui/material';
import React from 'react';
import todoManager from '../services/todoManager';

const DeleteButton = (context) => {
	const { state, setState } = context;

	return (
		<Button
			className="delete"
			onClick={ () =>
				setState({
					...state,
					toDo: todoManager.remove(context),
				}) }
			variant="contained"
			color="error"
			size="small"
		>
			x
		</Button>
	);
};

export default DeleteButton;
