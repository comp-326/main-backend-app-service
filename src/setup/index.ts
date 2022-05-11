import { Application } from 'express';
import expressApp from './express';
export default function ({ app }: { app: Application }){
	process.on('unhandledRejection', (reason, p) => {
		console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
	});
	process.on('uncaughtException', err => {
		console.log('Uncaught Exception thrown', err.message);
	});

	return expressApp({ app });
}
