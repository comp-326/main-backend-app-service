/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getCourseByIdController } from '../controllers';

export default function getCourseByIdRoute(app: Router) {
	return (pathName: string) => {
		const courseRouter = Router();
		app.use(`${pathName}`, courseRouter);
		courseRouter.get('/course/:id', getCourseByIdController);
	};
}
