/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getMpesaAccessToken } from '../middelware/getMpesaAccessToken';
import { mpesaB2CController } from '../controllers';

export function mpesaB2CRoute(app: Router) {
	return (pathName: string) => {
		const mpesaRouter = Router();
		app.use(`${pathName}`, mpesaRouter);
		mpesaRouter.get('/b2c',getMpesaAccessToken, mpesaB2CController);
	};
}
