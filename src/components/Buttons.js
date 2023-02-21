import { Box } from '@mui/material';
import React from 'react';
import AddButton from './AddButton';
import EditButton from './EditButton';

const Buttons = (context) => {
	const { state: { isEdit }} = context;

	return (
		<Box>
			{isEdit
				? <EditButton { ...context }/>
				: <AddButton { ...context }/>}
		</Box>
	);
};

export default Buttons;
