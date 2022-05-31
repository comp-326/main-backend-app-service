/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { deleteStudentByIdController } from '../controllers';

export function deleteStudentRoute(app: Router) {
	return (pathName: string) => {
		const studentRouter = Router();
		app.use(`${pathName}`, studentRouter);
		studentRouter.delete('/delete/:id', deleteStudentByIdController);
	};
}
