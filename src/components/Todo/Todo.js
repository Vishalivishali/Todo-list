import React from 'react';
import ActionButton from './ActionButton';
import ClearAllButton from './ClearAllButton';
import SelectAllCheckbox from './SelectAllCheckbox';
import TextBox from './TextBox';
import TodoList from './TodoList';

const Todo = (context) =>
	<div>
		<TextBox { ...context }/>
		<SelectAllCheckbox { ...context }/>
		<TodoList { ...context }/>
		<ClearAllButton { ...context }/>
		<ActionButton { ...context }/>
	</div>;

export default Todo;
