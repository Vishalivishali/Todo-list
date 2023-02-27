import { Button } from '@mui/material';
import React from 'react';

const Completed = (context) => {
	const { state, setState } = context;

	return (
		<Button
			className="completed"
			onClick={ () => setState({
				...state,
				filter: 'completed',
			}) }
			color="success"
		>
			Completed
		</Button>
	);
};

export default Completed;
