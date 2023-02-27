/* eslint-disable no-magic-numbers */
import { rndString } from '@laufire/utils/random';

const config = {
	datas: [{
		name: 'Calculate driver',
		id: rndString(5),
	},
	{
		name: 'Synthesize transmitter',
		id: rndString(5),
	},
	{
		name: 'Bypass array',
		id: rndString(5),
	}],

};

export default config;
