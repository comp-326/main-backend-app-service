/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getMpesaAccessToken } from '../middelware/getMpesaAccessToken';
import { mpesaBalanceController } from '../controllers';

export function mpesaBalanceRoute(app: Router) {
	return (pathName: string) => {
		const mpesaRouter = Router();
		app.use(`${pathName}`, mpesaRouter);
		mpesaRouter.get('/balance',getMpesaAccessToken, mpesaBalanceController);
	};
}
