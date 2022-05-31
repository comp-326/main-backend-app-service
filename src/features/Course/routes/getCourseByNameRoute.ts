/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getCourseByNameController } from '../controllers';

export default function getCourseByNameRoute(app: Router) {
	return (pathName: string) => {
		const courseRouter = Router();
		app.use(`${pathName}`, courseRouter);
		courseRouter.get('/find/name', getCourseByNameController);
	};
}
