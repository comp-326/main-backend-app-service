/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getAdminByIdController } from '../controllers';

export function getAdminByIdRoute(app: Router) {
	return (pathName: string) => {
		const adminRouter = Router();
		app.use(`${pathName}`, adminRouter);
		adminRouter.get('/admin/:id', getAdminByIdController);
	};
}
