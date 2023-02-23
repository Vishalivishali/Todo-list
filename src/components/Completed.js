import { Button } from '@mui/material';
import React from 'react';

const Completed = (context) => {
	const { state, setState } = context;

	return (
		<Button
			onClick={ () => setState({
				...state,
				filter: 'completed',
			}) }
		>
			Completed
		</Button>
	);
};

export default Completed;
