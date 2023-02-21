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

const isEdited = (context) => {
	const { state: { currentValue, toDos }} = context;

	return toDos.map((value) => (value.id === currentValue.id
		? currentValue
		: value));
};

const reName = () => null;

const isItemSelected = ({ state: { currentValue: { id }}}) => !id;

const todoManager = {
	addId,
	remove,
	toggleIsChecked,
	isEdited,
	reName,
	isItemSelected,
};

export default todoManager;
