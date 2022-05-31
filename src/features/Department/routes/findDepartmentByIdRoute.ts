/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findDepartmentByIdController } from '../controllers';

export function findDepartmentByIdRoute(app: Router) {
	return (pathName: string) => {
		const departmentRouter = Router();
		app.use(`${pathName}`, departmentRouter);
		departmentRouter.get('/department/:id', findDepartmentByIdController);
	};
}
