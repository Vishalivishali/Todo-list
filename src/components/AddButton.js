/* eslint-disable max-len */
import React from 'react';
import { Button } from '@mui/material';
import todoManager from '../services/todoManager';
const AddButton = (context) => {
	const { setState } = context;

	return (
		<Button
			className="add"
			onClick={ () =>
				setState((state) => ({ ...state,
					toDo: todoManager.addId(context) })) }
			variant="outlined"
			color="primary"
			size="medium"
		>
			Add
		</Button>
	);
};

export default AddButton;
