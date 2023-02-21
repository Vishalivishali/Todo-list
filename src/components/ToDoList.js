/* eslint-disable max-len */
import { Box } from '@mui/material';
import React from 'react';
import DeleteButton from './DeleteButton';
import CheckBox from './CheckBox';

const TodoList = (context) => {
	const { state: { toDos, isEdit }, setState } = context;

	return toDos.map((todo, key) =>
		<div key={ key }>
			<CheckBox { ...{ ...context, data: todo } }/>
			<Box
				onClick={ () => setState((state) => ({
					...state,
					isEdit: !isEdit,
					currentValue: todo,
				})) }
			>{todo.name}</Box>
			<DeleteButton { ...{ ...context, data: todo } }/>
		</div>);
};

export default TodoList;
