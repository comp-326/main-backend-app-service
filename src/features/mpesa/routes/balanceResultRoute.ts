/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { mpesaBalanceResultController } from '../controllers';

export function mpesaBalanceResultRoute(app: Router) {
	return (pathName: string) => {
		const mpesaRouter = Router();
		app.use(`${pathName}`, mpesaRouter);
		mpesaRouter.post('/bal_result', mpesaBalanceResultController);
	};
}
