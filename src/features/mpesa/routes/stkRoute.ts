/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getMpesaAccessToken } from '../middelware/getMpesaAccessToken';
import { mpesaStkController } from '../controllers';

export function mpesaSTKRoute(app: Router) {
	return (pathName: string) => {
		const mpesaRouter = Router();
		app.use(`${pathName}`, mpesaRouter);
		mpesaRouter.get('/stk', getMpesaAccessToken,mpesaStkController);
	};
}
