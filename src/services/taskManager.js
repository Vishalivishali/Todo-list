import { rndString, rndValue } from '@laufire/utils/random';

const removeTask = ({ state: { tasks }, data: task }) =>
	tasks.filter((value) => value.id !== task.id);

const genData = ({ config: { datas, idLength }}) =>
	datas.map((task) => ({ name: task, id: rndString(idLength) }));

const genName = ({ config: { datas, idLength }}) =>
	({
		name: rndValue(datas),
		id: rndString(idLength),
	});

const autoGenName = (context) => {
	const { setState, config: { delayTime }} = context;

	return setInterval(() => setState((newState) => {
		const { tasks, autoGenLimit } = newState;
		const generatedName = tasks.length < autoGenLimit
			? [...tasks, genName(context)]
			: tasks;

		return {
			...newState, tasks: generatedName,
		};
	}), delayTime);
};

const taskManager = {
	removeTask,
	genData,
	genName,
	autoGenName,
};

export default taskManager;
