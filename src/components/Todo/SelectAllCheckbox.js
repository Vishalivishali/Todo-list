/* eslint-disable max-len */
import React from 'react';
import { Box, Checkbox } from '@mui/material';
import todoManager from '../../services/todoManager';

const SelectAllCheckbox = (context) => {
	const { state: { toDos }, setState, state } = context;

	return (
		<Box className="select">
			<Checkbox
				checked={ toDos.length
					&& toDos.every((data) => data.isChecked) }
				onClick={ ({ target: { checked }}) => setState({ ...state,
					toDos: todoManager.toggleTodos({ ...{ ...context, data: checked }}) }) }
			/>
			SELECT ALL
		</Box>
	);
};

export default SelectAllCheckbox;
