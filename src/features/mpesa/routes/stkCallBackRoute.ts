/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { mpesaStkCallbackController } from '../controllers';

export function mpesaStkCallbackRoute(app: Router) {
	return (pathName: string) => {
		const mpesaRouter = Router();
		app.use(`${pathName}`, mpesaRouter);
		mpesaRouter.post('/stk_callback', mpesaStkCallbackController);
	};
}
