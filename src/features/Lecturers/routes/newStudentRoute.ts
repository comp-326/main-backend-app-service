/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { createLecturerController } from '../controllers';

export function newStudentRoute(app: Router) {
	return (pathName: string) => {
		const lecturerRouter = Router();
		app.use(`${pathName}`, lecturerRouter);
		lecturerRouter.post('/new', createLecturerController);
	};
}
