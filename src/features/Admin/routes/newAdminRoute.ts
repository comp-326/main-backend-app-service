/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { createAdminController } from '../controllers';

export  function newAdminRoute(app: Router) {
	return (pathName: string) => {
		const userRouter = Router();
		app.use(`${pathName}`, userRouter);
		userRouter.post('/account/register', createAdminController);

	};
}