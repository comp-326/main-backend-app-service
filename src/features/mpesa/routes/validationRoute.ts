/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { mpesaValidationController } from '../controllers';

export function mpesaValidationRoute(app: Router) {
	return (pathName: string) => {
		const mpesaRouter = Router();
		app.use(`${pathName}`, mpesaRouter);
		mpesaRouter.post('/validation', mpesaValidationController);
	};
}
