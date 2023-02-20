import { peek } from '@laufire/utils/debug';
import { React, useState } from 'react';
import './App.scss';
import AddButton from './components/AddButton';
import ClearAllButton from './components/ClearAllButton';
import Display from './components/Display';
import TextBox from './components/TextBox';

const initialState = () => ({
	currentValue: '',
	toDo: [],
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...{ ...context, state, setState }};

	peek(state);
	return <div className="App">
		<TextBox { ...extendedContext }/>
		<AddButton { ...extendedContext }/>
		<Display { ...extendedContext }/>
		<ClearAllButton { ...extendedContext }/>
	</div>;
};

export default App;
