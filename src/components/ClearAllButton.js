/* eslint-disable max-len */
import React from 'react';
import { Button } from '@mui/material';

const ClearAllButton = (context) => {
	const { state, setState, state: { toDo }} = context;

	return (
		<Button
			onClick={ () => setState({
				...state, toDo: toDo.filter((data) => data.isChecked !== true),
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
