import React from 'react';
import { Button } from '@mui/material';
import todoManager from '../services/todoManager';

const AddButton = (context) => {
	const { state, setState } = context;
	const { toDo, currentValue } = state;

	return (
		<Button
			onClick={ () =>
				setState({ ...state,
					toDo: [...toDo, { ...currentValue,
						id: todoManager.addId(context) }] }) }
			variant="contained"
			size="medium"
		>
			Add
		</Button>
	);
};

export default AddButton;
