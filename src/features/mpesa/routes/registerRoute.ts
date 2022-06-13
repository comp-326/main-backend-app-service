/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getMpesaAccessToken } from '../middelware/getMpesaAccessToken';
import { mpesaRegistrationController } from '../controllers';

export function mpesaRegistrationRoute(app: Router) {
	return (pathName: string) => {
		const mpesaRouter = Router();
		app.use(`${pathName}`, mpesaRouter);
		mpesaRouter.get('/register',getMpesaAccessToken, mpesaRegistrationController);
	};
}
