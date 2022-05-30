/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getCoursesController } from '../controllers';

export default function getCoursesRoute(app: Router) {
	return (pathName: string) => {
		const courseRouter = Router();
		app.use(`${pathName}`, courseRouter);
		courseRouter.get('/all', getCoursesController);
	};
}
