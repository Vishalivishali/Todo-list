import React from 'react';
import { Box, Checkbox } from '@mui/material';

const SelectAllButton = (context) => {
	const { state: { toDo }} = context;

	return <Box>
		<Checkbox
			checked={ toDo.every((data) => data.isChecked === true) }
		/>
		SELECT ALL
	</Box>;
};

export default SelectAllButton;
