/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { createStudentController } from '../controllers';

export function newStudentRoute(app: Router) {
	return (pathName: string) => {
		const studentRouter = Router();
		app.use(`${pathName}`, studentRouter);
		studentRouter.post('/new', createStudentController);
	};
}
