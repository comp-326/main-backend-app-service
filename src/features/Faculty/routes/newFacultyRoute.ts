/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { createFacultyController } from '../controllers';


export function newFacultyRoute(app: Router) {
	return (pathName: string) => {
		const userRouter = Router();
		app.use(`${pathName}`, userRouter);
		userRouter.post('/new', createFacultyController);

	};
}