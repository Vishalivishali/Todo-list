import { React, useState } from 'react';
import './App.scss';
import ActionButton from './components/ActionButton';
import ClearAllButton from './components/ClearAllButton';
import SelectAllCheckbox from './components/SelectAllCheckbox';
import TextBox from './components/TextBox';
import TodoList from './components/ToDoList';

const initialState = () => ({
	currentValue: { name: '' },
	toDos: [],
	isEdit: false,
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...{ ...context, state, setState }};

	return <div className="App">
		<TextBox { ...extendedContext }/>
		<ActionButton { ...extendedContext }/>
		<SelectAllCheckbox { ...extendedContext }/>
		<TodoList { ...extendedContext }/>
		<ClearAllButton { ...extendedContext }/>
	</div>;
};

export default App;
