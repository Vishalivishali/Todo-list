import { rndString } from '@laufire/utils/random';

const addId = ({ state: { currentValue }, config: { idLength }}) =>
	({ ...currentValue,
		id: rndString(idLength) });

const remove = ({ state: { toDo }, data: todo }) =>
	toDo.filter((value) => value.id !== todo.id);

const todoManager = {
	addId,
	remove,
};

export default todoManager;
