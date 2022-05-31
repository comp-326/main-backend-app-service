/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findStudentByEmailController } from '../controllers';

export function findStudentByEmailRoute(app: Router) {
	return (pathName: string) => {
		const studentRouter = Router();
		app.use(`${pathName}`, studentRouter);
		studentRouter.get('/email/find', findStudentByEmailController);
	};
}
