/* eslint-disable max-len */
import { Box } from '@mui/material';
import React from 'react';
import DeleteTodoButton from './DeleteTodoButton';
import CheckBox from './CheckBox';
import todoManager from '../../services/todoManager';

const TodoList = (context) => {
	const { state: { isEdit, filter }, setState } = context;

	const filters = todoManager.filteredValue[filter](context);

	return filters.map((todo, key) =>
		<div key={ key }>
			<CheckBox { ...{ ...context, data: todo } }/>
			<Box
				onClick={ () => setState((state) => ({
					...state,
					isEdit: !isEdit,
					currentValue: todo,
				})) }
			>{todo.name}</Box>
			<DeleteTodoButton { ...{ ...context, data: todo } }/>
		</div>);
};

export default TodoList;
