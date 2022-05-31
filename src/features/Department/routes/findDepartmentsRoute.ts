/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findDepartmentsController } from '../controllers';

export function findDepartmentsRoute(app: Router) {
	return (pathName: string) => {
		const departmentRouter = Router();
		app.use(`${pathName}`, departmentRouter);
		departmentRouter.get('/all', findDepartmentsController);
	};
}
