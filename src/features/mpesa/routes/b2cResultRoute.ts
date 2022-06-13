/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { mpesaB2CResultController } from '../controllers';

export function mpesaB2CResultRoute(app: Router) {
	return (pathName: string) => {
		const mpesaRouter = Router();
		app.use(`${pathName}`, mpesaRouter);
		mpesaRouter.post('/b2c_result_url', mpesaB2CResultController);
	};
}
