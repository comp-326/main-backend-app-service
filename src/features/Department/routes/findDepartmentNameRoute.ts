/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findDepartmentByNameController } from '../controllers';

export function findDepartmentByNameRoute(app: Router) {
	return (pathName: string) => {
		const departmentRouter = Router();
		app.use(`${pathName}`, departmentRouter);
		departmentRouter.get('/name/find', findDepartmentByNameController);
	};
}
