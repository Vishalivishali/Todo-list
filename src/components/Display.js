/* eslint-disable max-len */
import { Box } from '@mui/material';
import React from 'react';
import DeleteButton from './DeleteButton';

const Display = (context) => {
	const { state: { toDo }} = context;

	return toDo.map((todo, key) =>
		<div key={ key }>
			<Box>{todo.name}</Box>
			<DeleteButton { ...{ ...context, data: todo } }/>
		</div>);
};

export default Display;
