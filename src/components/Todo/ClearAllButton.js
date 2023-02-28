/* eslint-disable max-len */
import React from 'react';
import { Button } from '@mui/material';

const ClearAllButton = (context) => {
	const { state, setState, state: { toDos }} = context;

	return (
		<Button
			disabled={ !toDos.some((todo) => todo.isChecked) }
			onClick={ () => setState({
				...state, toDos: toDos.filter((data) => data.isChecked !== true),
			}) }
			variant="contained"
			color="error"
			size="large"
		>
			CLEAR ALL X
		</Button>
	);
};

export default ClearAllButton;
