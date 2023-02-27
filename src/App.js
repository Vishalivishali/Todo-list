import { React, useState } from 'react';
import './App.scss';
import ActionButton from './components/ActionButton';
import Active from './components/Active';
import All from './components/All';
import ClearAllButton from './components/ClearAllButton';
import Completed from './components/Completed';
import SelectAllCheckbox from './components/SelectAllCheckbox';
import TextBox from './components/TextBox';
import TodoList from './components/TodoList';
import TaskData from './components/TaskData';

const initialState = ({ config: { datas }}) => ({
	currentValue: { name: '' },
	toDos: [],
	isEdit: false,
	filter: 'all',
	tasks: datas,
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...{ ...context, state, setState }};

	return <div className="App">
		<TextBox { ...extendedContext }/>
		<ActionButton { ...extendedContext }/>
		<All { ...extendedContext }/>
		<Active { ...extendedContext }/>
		<Completed { ...extendedContext }/>
		<SelectAllCheckbox { ...extendedContext }/>
		<TodoList { ...extendedContext }/>
		<ClearAllButton { ...extendedContext }/>
		<TaskData { ...extendedContext }/>
	</div>;
};

export default App;
