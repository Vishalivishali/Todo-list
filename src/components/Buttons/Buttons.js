import React from 'react';
import Active from './Active';
import All from './All';
import Completed from './Completed';

const Buttons = (context) =>
	<div>
		<All { ...context }/>
		<Active { ...context }/>
		<Completed { ...context }/>
	</div>;

export default Buttons;
