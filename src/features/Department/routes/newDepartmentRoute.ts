/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { createDepartmentController } from '../controllers';

export function newDepartmentRoute(app: Router) {
	return (pathName: string) => {
		const departmentRouter = Router();
		app.use(`${pathName}`, departmentRouter);
		departmentRouter.post('/new', createDepartmentController);
	};
}
