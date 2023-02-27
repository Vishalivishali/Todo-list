import { Button } from '@mui/material';
import React from 'react';

const All = (context) => {
	const { setState, state } = context;

	return (
		<Button
			className="all"
			onClick={ () => setState({
				...state,
				filter: 'all',
			}) }
		>
			All
		</Button>
	);
};

export default All;
