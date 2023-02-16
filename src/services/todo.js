import { rndString } from '@laufire/utils/random';

const addId = ({ state: { currentValue }, config: { idLength }}) =>
	({ ...currentValue,
		id: rndString(idLength) });

const todo = {
	addId,
};

export default todo;
