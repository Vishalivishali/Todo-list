import { React, useState } from 'react';
import './App.scss';
import Todo from './components/Todo/Todo';
import Buttons from './components/Buttons/Buttons';
import Task from './components/Task/Task';
import taskManager from './services/taskManager';

const initialState = {
	currentValue: { name: '' },
	toDos: [],
	isEdit: false,
	filter: 'all',
	tasks: [],
	autoGenLimit: 3,
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...{ ...context, state, setState }};
	const { once } = context;

	once(() => taskManager.autoGenName(extendedContext));

	return <div className="App">
		<Todo { ...extendedContext }/>
		<Buttons { ...extendedContext }/>
		<Task { ...extendedContext }/>
	</div>;
};

export default App;
