import { rndString } from '@laufire/utils/random';

const removeTask = ({ state: { tasks }, data: task }) =>
	tasks.filter((value) => value.id !== task.id);

const genData = ({ config: { datas, idLength }}) =>
	datas.map((task) => ({ name: task, id: rndString(idLength) }));

const taskManager = {
	removeTask,
	genData,
};

export default taskManager;
