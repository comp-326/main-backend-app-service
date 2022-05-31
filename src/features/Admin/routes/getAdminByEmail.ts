/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getAdminByEmailController } from '../controllers';

export function getAdminByEmailRoute(app: Router) {
	return (pathName: string) => {
		const adminRouter = Router();
		app.use(`${pathName}`, adminRouter);
		adminRouter.get('/email/find', getAdminByEmailController);
	};
}
