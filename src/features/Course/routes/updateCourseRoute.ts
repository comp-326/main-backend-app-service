/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { updateCourseController } from '../controllers';

export default function updateCourseRoute(app: Router) {
	return (pathName: string) => {
		const courseRouter = Router();
		app.use(`${pathName}`, courseRouter);
		courseRouter.put('/update/:id', updateCourseController);
	};
}
