/* eslint-disable max-len */
import { React } from 'react';
import { Checkbox } from '@mui/material';
import todoManager from '../../services/todoManager';

const CheckBox = (context) => {
	const { setState, data: todo, state } = context;

	return (
		<Checkbox
			onClick={ () => setState({
				...state,
				toDo: todoManager.toggleIsChecked({ ...{ ...context, data: todo }}),
			}) }
		/>
	);
};

export default CheckBox;
