/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { deleteDepartmentByIdController } from '../controllers';

export function deleteDepartmentRoute(app: Router) {
	return (pathName: string) => {
		const departmentRouter = Router();
		app.use(`${pathName}`, departmentRouter);
		departmentRouter.delete('/delete/:id', deleteDepartmentByIdController);
	};
}
