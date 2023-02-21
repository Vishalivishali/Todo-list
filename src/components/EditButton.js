import { Button, Box } from '@mui/material';
import React from 'react';
import todoManager from '../services/todoManager';

const EditButton = (context) => {
	const { setState, state, state: { isEdit }} = context;

	return <Box>
		<Button
			onClick={ () => setState({ ...state,
				toDo: todoManager.isEdited(context),
				isEdit: !isEdit }) }
			variant="outlined"
			color="primary"
		>
			EDIT
		</Button>
	</Box>;
};

export default EditButton;
