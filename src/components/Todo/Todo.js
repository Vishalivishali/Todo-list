import { Box, Checkbox } from '@mui/material';
import React from 'react';
import DeleteTodoButton from './DeleteTodoButton';

const Todo = (context) => {
	const { setState, data: todo, state: { isEdit }} = context;

	return (
		<div>
			<Checkbox { ...{ ...context, data: todo } }/>
			<Box
				className="inputName"
				onClick={ () => setState((state) => ({
					...state,
					isEdit: !isEdit,
					currentValue: todo,
				})) }
			>{todo.name}</Box>
			<DeleteTodoButton { ...{ ...context, data: todo } }/>
		</div>);
};

export default Todo;
