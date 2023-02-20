import { rndString } from '@laufire/utils/random';

const addId = ({ state: { currentValue }, config: { idLength }}) =>
	({ ...currentValue,
		id: rndString(idLength),
		isChecked: false });

const remove = ({ state: { toDo }, data: todo }) =>
	toDo.filter((value) => value.id !== todo.id);

const toggleIsChecked = (context) => {
	const { state: { toDo }, data: todo } = context;

	return toDo.map((value) => {
		const { isChecked } = value;

		return value.id === todo.id
			? { ...value, isChecked: !isChecked }
			: value;
	});
};

const todoManager = {
	addId,
	remove,
	toggleIsChecked,
};

export default todoManager;
