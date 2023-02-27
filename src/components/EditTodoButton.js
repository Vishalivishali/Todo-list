import { Button, Box } from '@mui/material';
import React from 'react';
import todoManager from '../services/todoManager';

const EditTodoButton = (context) => {
	const { setState, state, state: { isEdit }} = context;

	return (
		<Box className="add">
			<Button
				onClick={ () => setState({ ...state,
					toDos: todoManager.isEdited(context),
					isEdit: !isEdit }) }
				variant="outlined"
				color="primary"
			>
				EDIT
			</Button>
		</Box>
	);
};

export default EditTodoButton;
