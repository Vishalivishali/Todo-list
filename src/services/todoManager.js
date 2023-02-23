/* eslint-disable max-len */
import { rndString } from '@laufire/utils/random';

const addId = ({ state: { toDos, currentValue }, config: { idLength }}) =>
	[...toDos,
		{ ...currentValue, id: rndString(idLength),
			isChecked: false }];

const remove = ({ state: { toDos }, data: todo }) =>
	toDos.filter((value) => value.id !== todo.id);

const toggleIsChecked = (context) => {
	const { state: { toDos }, data: todo } = context;

	return toDos.map((value) => {
		const { isChecked } = value;

		return value.id === todo.id
			? { ...value, isChecked: !isChecked }
			: value;
	});
};

const toggleIsSelected = (context) => {
	const { state: { toDos }, data: checked } = context;

	return toDos.map((todoValue) => ({ ...todoValue, isChecked: checked	}));
};

const isEdited = (context) => {
	const { state: { currentValue, toDos }} = context;

	return toDos.map((value) => (value.id === currentValue.id
		? currentValue
		: value));
};

const reName = () => null;

const filteredValue = {
	all: ({ state: { toDos }}) => toDos,
	active: ({ state: { toDos }}) => toDos.filter((data) => !data.isChecked),
	completed: ({ state: { toDos }}) => toDos.filter((data) => data.isChecked),
};

const todoManager = {
	addId,
	remove,
	toggleIsChecked,
	toggleIsSelected,
	isEdited,
	reName,
	filteredValue,
};

export default todoManager;
