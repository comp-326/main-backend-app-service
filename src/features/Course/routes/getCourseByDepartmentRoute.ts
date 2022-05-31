/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getCourseByDepartmentController } from '../controllers';

export default function getCourseByDepartmentRoute(app: Router) {
	return (pathName: string) => {
		const courseRouter = Router();
		app.use(`${pathName}`, courseRouter);
		courseRouter.get('/department/:departmentId', getCourseByDepartmentController);
	};
}
