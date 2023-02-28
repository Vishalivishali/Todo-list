/* eslint-disable max-len */
import React from 'react';
import { TextField } from '@mui/material';
import { peek } from '@laufire/utils/debug';

const TextBox = (context) => {
	const { setState, state: { currentValue }} = context;

	return (
		<TextField
			placeholder="To-Do :)"
			value={ peek(currentValue.name) }
			onChange={ ({ target: { value }}) =>
				setState((state) => ({ ...state, currentValue: { ...currentValue, name: value }})) }
			variant="outlined"
			size="medium"
		/>
	);
};

export default TextBox;
