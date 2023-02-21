/* eslint-disable max-len */
import React from 'react';
import { Button } from '@mui/material';
import todoManager from '../services/todoManager';

const AddButton = (context) => {
	const { setState, state: { currentValue }} = context;

	return (
		<Button
			className="add"
			disabled={ !currentValue.name }
			onClick={ () =>
				setState((state) => ({ ...state,
					toDo: todoManager.addId(context),
					currentValue: { name: '' }})) }
			variant="outlined"
			color="primary"
			size="medium"
		>
			Add
		</Button>
	);
};

export default AddButton;
