import { Application } from 'express';
import { errorLogger } from '@exam-cell-utils/logger';
import expressApp from './express';
import moment from 'moment';

export default function ({ app }: { app: Application }) {
	process.on('unhandledRejection', (reason, p) => {
		errorLogger.error(
			JSON.stringify({
				timestamp: moment().format('LLLL'),
				message: 'Unhandled Rejection at Promise',
				reason,
				promise: p,
			}),
		);
	});
	process.on('uncaughtException', (err) => {
		errorLogger.error(
			JSON.stringify({
				timestamp: moment().format('LLLL'),
				message: err.message,
				stack: err.stack,
			}),
		);
	});

	return expressApp({ app });
}
