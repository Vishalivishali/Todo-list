import React from 'react';
import { Box, Checkbox } from '@mui/material';

const SelectAllButton = (context) => {
	const { state: { toDos }} = context;

	return (
		<Box>
			<Checkbox
				checked={ toDos.every((data) => data.isChecked === true) }
			/>
			SELECT ALL
		</Box>
	);
};

export default SelectAllButton;
