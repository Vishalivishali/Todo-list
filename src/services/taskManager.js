import { rndString, rndValue } from '@laufire/utils/random';

const removeTask = ({ state: { tasks }, data: task }) =>
	tasks.filter((value) => value.id !== task.id);

const genData = ({ config: { datas, idLength }}) =>
	datas.map((task) => ({ name: task, id: rndString(idLength) }));

const generateTask = ({ config: { datas, idLength }}) =>
	({
		name: rndValue(datas),
		id: rndString(idLength),
	});

const autoGenTask = (context) => {
	const { setState, config: { delayTime }} = context;

	return setInterval(() => setState((newState) => {
		const { tasks, autoGenLimit } = newState;
		const generatedName = tasks.length < autoGenLimit
			? [...tasks, generateTask(context)]
			: tasks;

		return {
			...newState, tasks: generatedName,
		};
	}), delayTime);
};

const taskManager = {
	removeTask,
	genData,
	generateTask,
	autoGenTask,
};

export default taskManager;
