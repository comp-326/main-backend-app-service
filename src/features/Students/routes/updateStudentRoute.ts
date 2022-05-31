/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { updateStudentByIdController } from '../controllers';

export function updateStudentRoute(app: Router) {
	return (pathName: string) => {
		const studentRouter = Router();
		app.use(`${pathName}`, studentRouter);
		studentRouter.put('/update/:id', updateStudentByIdController);
	};
}
