/* eslint-disable max-len */
/* eslint-disable id-length */
import { Button } from '@mui/material';
import React from 'react';
import todoManager from '../services/todoManager';

const Delete = (context) => {
	const { state, setState } = context;

	return (
		<Button
			onClick={ () =>
				setState({
					...state,
					tasks: todoManager.removeName(context),
				}) }
			variant="contained"
			color="error"
			size="small"
		>
			x
		</Button>
	);
};

export default Delete;
