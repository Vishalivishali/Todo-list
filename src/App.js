import './App.scss';
import { React, useState } from 'react';

import TodoPanel from './components/Todo/TodoPanel';
import TaskPanel from './components/Task/TaskPanel';
import taskManager from './services/taskManager';

const initialState = {
	currentValue: { name: '' },
	toDos: [],
	isEdit: false,
	filter: 'all',
	tasks: [],
	autoGenLimit: 5,
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...{ ...context, state, setState }};
	const { once } = context;

	once(() => taskManager.autoGenTask(extendedContext));

	return <div className="App">
		<TodoPanel { ...extendedContext }/>
		<TaskPanel { ...extendedContext }/>
	</div>;
};

export default App;
