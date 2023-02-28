/* eslint-disable max-len */
import { React } from 'react';
import { Checkbox } from '@mui/material';
import todoManager from '../../services/todoManager';

const CheckBox = (context) => {
	const { setState, state, data: todo } = context;

	return (
		<Checkbox
			className="checkbox"
			checked={ todo.isChecked }
			onClick={ () => setState({
				...state,
				toDos: todoManager.toggleTodo({ ...{ ...context, data: todo }}),
			}) }
		/>
	);
};

export default CheckBox;
