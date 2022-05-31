/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getAdminsController } from '../controllers';

export function getAdminsRoute(app: Router) {
	return (pathName: string) => {
		const adminRouter = Router();
		app.use(`${pathName}`, adminRouter);
		adminRouter.get('/all', getAdminsController);
	};
}
