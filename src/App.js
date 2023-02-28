import { React, useState } from 'react';
import './App.scss';
import Todo from './components/Todo/Todo';
import Buttons from './components/Buttons/Buttons';
import Task from './components/Task/Task';
import taskManager from './services/taskManager';

const initialState = (context) => ({
	currentValue: { name: '' },
	toDos: [],
	isEdit: false,
	filter: 'all',
	tasks: taskManager.genData(context),
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...{ ...context, state, setState }};

	return <div className="App">
		<Todo { ...extendedContext }/>
		<Buttons { ...extendedContext }/>
		<Task { ...extendedContext }/>
	</div>;
};

export default App;
