/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findStudentByIdController } from '../controllers';

export function findStudentByIdRoute(app: Router) {
	return (pathName: string) => {
		const studentRouter = Router();
		app.use(`${pathName}`, studentRouter);
		studentRouter.get('/student/:id', findStudentByIdController);
	};
}
