/* eslint-disable max-len */
import { Box } from '@mui/material';
import React from 'react';

const Display = (context) => {
	const { state: { toDo }} = context;

	return toDo.map((todo, key) => <Box key={ key }>{todo.name}</Box>);
};

export default Display;
