/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { updateDepartmentByIdController } from '../controllers';

export function updateDepartmentRoute(app: Router) {
	return (pathName: string) => {
		const departmentRouter = Router();
		app.use(`${pathName}`, departmentRouter);
		departmentRouter.put('/update/:id', updateDepartmentByIdController);
	};
}
