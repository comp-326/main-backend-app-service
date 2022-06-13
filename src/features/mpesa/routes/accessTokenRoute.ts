/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { mpesaAccessTokenController } from '../controllers';

export function mpesaAccessTokenRoute(app: Router) {
	return (pathName: string) => {
		const mpesaRouter = Router();
		app.use(`${pathName}`, mpesaRouter);
		mpesaRouter.get('/access_token', mpesaAccessTokenController);
	};
}
