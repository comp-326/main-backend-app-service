/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { createAdminController } from '../controllers';

export  function newAdminRoute(app: Router) {
	return (pathName: string) => {
		const adminRouter = Router();
		app.use(`${pathName}`, adminRouter);
		adminRouter.post('/new', createAdminController);

	};
}