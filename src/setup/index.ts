import { Application } from 'express';
import { errorLogger } from '@exam-cell-utils/logger';
import expressApp from './express';

export default function ({ app }: { app: Application }){
	process.on('unhandledRejection', (reason, p) => {
		errorLogger.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
	});
	process.on('uncaughtException', err => {
		errorLogger.error('Uncaught Exception thrown', err.message);
	});

	return expressApp({ app });
}
