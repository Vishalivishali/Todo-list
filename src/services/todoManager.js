import { rndString } from '@laufire/utils/random';

const addId = ({ state: { currentValue }, config: { idLength }}) =>
	({ ...currentValue,
		id: rndString(idLength) });

const todoManager = {
	addId,
};

export default todoManager;
