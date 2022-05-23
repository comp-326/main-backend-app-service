/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '@exam-cell/knexfile';
import { environmentConfig } from '@exam-cell-config';
import knex from 'knex';

const pgLog = {
	log: {
		warn: (message: any) => {
			console.log(message);

		},
		debug: (message: any) => {
			console.log(message);

		},
		error: (message: any) => {
			console.log(message);

		}
	}
};

const pgConnection = knex({
	...config[environmentConfig.NODE_ENV],
	log: pgLog.log
});


export default pgConnection;

export { pgConnection };