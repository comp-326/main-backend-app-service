/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { createNewDepartmentController } from '../controllers';

export default function newDepartmentRoute(app: Router) {
	return (pathName: string) => {
		const departmentRouter = Router();
		app.use(`${pathName}`, departmentRouter);
		departmentRouter.post('/new', createNewDepartmentController);
	};
}
