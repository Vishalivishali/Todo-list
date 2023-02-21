/* eslint-disable max-len */
import { React } from 'react';
import { Checkbox } from '@mui/material';
import todoManager from '../services/todoManager';

const CheckBox = (context) => {
	const { setState, state, data: todo } = context;

	return (
		<Checkbox
			checked={ todo.isChecked }
			className="checkbox"
			onClick={ () => setState({
				...state,
				toDos: todoManager.toggleIsChecked({ ...{ ...context, data: todo }}),
			}) }
		/>
	);
};

export default CheckBox;
