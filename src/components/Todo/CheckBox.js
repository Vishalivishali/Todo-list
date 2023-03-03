/* eslint-disable max-len */
import { React } from 'react';
import { Checkbox } from '@mui/material';
import todoManager from '../../services/todoManager';

const CheckBox = (context) => {
	const { setState, state, data } = context;
	const { isChecked } = data;

	return (
		<Checkbox
			className="checkbox"
			checked={ isChecked }
			onClick={ () => setState({
				...state,
				toDos: todoManager.toggleTodo({ ...{ ...context, data }}),
			}) }
		/>
	);
};

export default CheckBox;
