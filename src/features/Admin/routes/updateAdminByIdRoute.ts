/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { updateAdminController } from '../controllers';

export function updateAdminByIdRoute(app: Router) {
	return (pathName: string) => {
		const adminRouter = Router();
		app.use(`${pathName}`, adminRouter);
		adminRouter.put('/update/:id', updateAdminController);
	};
}
