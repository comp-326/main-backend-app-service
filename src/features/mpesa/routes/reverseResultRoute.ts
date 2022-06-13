/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { mpesaReversalResultController } from '../controllers';

export function mpesaReversalResultRoute(app: Router) {
	return (pathName: string) => {
		const mpesaRouter = Router();
		app.use(`${pathName}`, mpesaRouter);
		mpesaRouter.post('/reversal_result_url', mpesaReversalResultController);
	};
}
