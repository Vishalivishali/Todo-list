import { Button } from '@mui/material';
import React from 'react';

const Active = (context) => {
	const { state, setState } = context;

	return (
		<Button
			onClick={ () => setState({
				...state,
				filter: 'active',
			}) }
			color="error"
		>
			Active
		</Button>
	);
};

export default Active;
