/* eslint-disable max-len */
import React from 'react';
import { Box, Checkbox } from '@mui/material';
import todoManager from '../../services/todoManager';

const SelectAllCheckbox = (context) => {
	const { setState, state } = context;
	const isAllChecked = todoManager.isAllChecked(context);

	return (
		<Box>
			<Checkbox
				checked={ isAllChecked }
				onClick={ ({ target: { checked }}) => setState({ ...state,
					toDos: todoManager.toggleTodos({ ...{ ...context, data: checked }}) }) }
			/>
			SELECT ALL
		</Box>
	);
};

export default SelectAllCheckbox;
