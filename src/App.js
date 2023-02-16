import { React, useState } from 'react';
import './App.scss';
import AddButton from './components/AddButton';
import Display from './components/Display';
import TextBox from './components/TextBox';

const initialState = () => ({
	currentValue: {},
	toDo: [],
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...{ ...context, state, setState }};

	return <div className="App">
		<TextBox { ...extendedContext }/>
		<AddButton { ...extendedContext }/>
		<Display { ...extendedContext }/>
	</div>;
};

export default App;
