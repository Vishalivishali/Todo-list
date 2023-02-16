/* eslint-disable max-len */
import React from 'react';
import { TextField } from '@mui/material';

const TextBox = (context) => {
	const { state: { currentValue }, setState } = context;

	return (
		<TextField
			placeholder="To-Do :)"
			onChange={ ({ target: { value }}) =>
				setState((state) => ({ ...state, currentValue: { ...currentValue, name: value }})) }
			variant="outlined"
			size="medium"
		/>
	);
};

export default TextBox;
