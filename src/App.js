import { React, useState } from 'react';
import './App.scss';
import Buttons from './components/Buttons';
import ClearAllButton from './components/ClearAllButton';
import Display from './components/Display';
import TextBox from './components/TextBox';

const initialState = () => ({
	currentValue: { name: '' },
	toDo: [],
	isEdit: false,
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...{ ...context, state, setState }};

	return <div className="App">
		<TextBox { ...extendedContext }/>
		<Buttons { ...extendedContext }/>
		<Display { ...extendedContext }/>
		<ClearAllButton { ...extendedContext }/>
	</div>;
};

export default App;
