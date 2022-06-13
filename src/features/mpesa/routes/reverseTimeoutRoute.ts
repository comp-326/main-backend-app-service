/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { mpesaReversalTimeoutController } from '../controllers';

export function mpesaReversalTimeoutRoute(app: Router) {
	return (pathName: string) => {
		const mpesaRouter = Router();
		app.use(`${pathName}`, mpesaRouter);
		mpesaRouter.post('/reversal_timeout_url', mpesaReversalTimeoutController);
	};
}
