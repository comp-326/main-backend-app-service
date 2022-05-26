/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { createNewCourseController } from '../controllers';

export default function newCourseRoute(app: Router) {
	return (pathName: string) => {
		const courseRouter = Router();
		app.use(`${pathName}`, courseRouter);
		courseRouter.post('/new', createNewCourseController);
	};
}
