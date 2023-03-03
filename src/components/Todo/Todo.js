import { Box } from '@mui/material';
import React from 'react';
import CheckBox from './CheckBox';
import DeleteTodoButton from './DeleteTodoButton';

const Todo = (context) => {
	const { setState, data: todo, state: { isEdit }} = context;

	return (
		<Box className="container">
			<CheckBox { ...context }/>
			<Box
				className="todoInput"
				onClick={ () => setState((state) => ({
					...state,
					isEdit: !isEdit,
					currentValue: todo,
				})) }
			>{todo.name}</Box>
			<DeleteTodoButton { ...context }/>
		</Box>);
};

export default Todo;
