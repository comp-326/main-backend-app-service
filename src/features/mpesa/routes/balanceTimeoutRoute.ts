/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { mpesaBalanceTimeoutController } from '../controllers';

export function mpesaBalanceTimeoutRoute(app: Router) {
	return (pathName: string) => {
		const mpesaRouter = Router();
		app.use(`${pathName}`, mpesaRouter);
		mpesaRouter.post('/bal_timeout', mpesaBalanceTimeoutController);
	};
}
