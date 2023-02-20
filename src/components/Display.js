/* eslint-disable max-len */
import { Box } from '@mui/material';
import React from 'react';
import DeleteButton from './DeleteButton';
import CheckBox from './CheckBox';

const Display = (context) => {
	const { state: { toDo }} = context;

	return toDo.map((todo, key) =>
		<div key={ key }>
			<CheckBox { ...{ ...context, data: todo } }/>
			<Box>{todo.name}</Box>
			<DeleteButton { ...{ ...context, data: todo } }/>
		</div>);
};

export default Display;
