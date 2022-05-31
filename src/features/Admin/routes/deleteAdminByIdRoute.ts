/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { deleteAdminByIdController } from '../controllers';

export function deleteAdminByIdRoute(app: Router) {
	return (pathName: string) => {
		const adminRouter = Router();
		app.use(`${pathName}`, adminRouter);
		adminRouter.delete(
			'/admin/delete/:id',
			deleteAdminByIdController,
		);
	};
}
