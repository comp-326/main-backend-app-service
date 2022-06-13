/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getMpesaAccessToken } from '../middelware/getMpesaAccessToken';
import { mpesaReversalController } from '../controllers';

export function mpesaReversalRoute(app: Router) {
	return (pathName: string) => {
		const mpesaRouter = Router();
		app.use(`${pathName}`, mpesaRouter);
		mpesaRouter.get(
			'/reverse',
			getMpesaAccessToken,
			mpesaReversalController,
		);
	};
}
