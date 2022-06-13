/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { mpesaB2CTimeoutController } from '../controllers';

export function mpesaB2CTimeoutRoute(app: Router) {
	return (pathName: string) => {
		const mpesaRouter = Router();
		app.use(`${pathName}`, mpesaRouter);
		mpesaRouter.post('/b2c_timeout_url', mpesaB2CTimeoutController);
	};
}
