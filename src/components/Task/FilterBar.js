import React from 'react';
import Active from '../FilterBar/Active';
import All from '../FilterBar/All';
import Completed from '../FilterBar/Completed';

const FilterBar = (context) =>
	<div>
		<All { ...context }/>
		<Active { ...context }/>
		<Completed { ...context }/>
	</div>;

export default FilterBar;
