import { Button, Box } from '@mui/material';
import React from 'react';
import todoManager from '../../services/todoManager';

const EditTodoButton = (context) => {
	const { setState, state, state: { isEdit }} = context;

	return (
		<Box>
			<Button
				className="add"
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
