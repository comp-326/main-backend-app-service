/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findStudentsController } from '../controllers';

export function findStudentsRoute(app: Router) {
	return (pathName: string) => {
		const studentRouter = Router();
		app.use(`${pathName}`, studentRouter);
		studentRouter.get('/all', findStudentsController);
	};
}
