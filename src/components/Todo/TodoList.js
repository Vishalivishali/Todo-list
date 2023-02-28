/* eslint-disable max-len */
import React from 'react';
import todoManager from '../../services/todoManager';
import Todo from './Todo';

const TodoList = (context) => {
	const { state: { filter }} = context;

	const filteredTodos = todoManager.filterTodos[filter](context);

	return filteredTodos.map((todo, key) =>
		<Todo key={ key } { ...{ ...context, data: todo } }/>);
};

export default TodoList;
