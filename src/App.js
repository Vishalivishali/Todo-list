import { React, useState } from 'react';
import './App.scss';
import TaskPanel from './components/Task/TaskPanel';
import taskManager from './services/taskManager';
import TodoPanel from './components/Todo/TodoPanel';

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

	once(() => taskManager.autoGenTask(extendedContext));

	return <div className="App">
		<TodoPanel { ...extendedContext }/>
		<filterBar { ...extendedContext }/>
		<TaskPanel { ...extendedContext }/>
	</div>;
};

export default App;
