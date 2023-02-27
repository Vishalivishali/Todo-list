/* eslint-disable max-len */
import React from 'react';
import { Button, Box } from '@mui/material';
import todoManager from '../services/todoManager';

const AddTodoButton = (context) => {
	const { setState, state: { currentValue }} = context;

	return (
		<Box className="add">
			<Button
				className="add"
				disabled={ !currentValue.name }
				onClick={ () =>
					setState((state) => ({ ...state,
						toDos: todoManager.addId(context),
						currentValue: { name: '' }})) }
				variant="outlined"
				color="primary"
				size="medium"
			>
				Add
			</Button>
		</Box>
	);
};

export default AddTodoButton;
