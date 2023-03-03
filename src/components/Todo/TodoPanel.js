import { Box } from '@mui/material';
import React from 'react';
import FilterBar from '../Task/FilterBar';
import ActionButton from './ActionButton';
import ClearAllButton from './ClearAllButton';
import SelectAllCheckbox from './SelectAllCheckbox';
import TextBox from './TextBox';
import TodoList from './TodoList';

const TodoPanel = (context) =>
	<Box className="todo">
		<TextBox { ...context }/>
		<ActionButton { ...context }/>
		<FilterBar { ...context }/>
		<SelectAllCheckbox { ...context }/>
		<TodoList { ...context }/>
		<ClearAllButton { ...context }/>
	</Box>;

export default TodoPanel;
