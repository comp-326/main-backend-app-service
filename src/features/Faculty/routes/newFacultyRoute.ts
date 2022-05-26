/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { createFacultyController } from '../controllers';

export function newFacultyRoute(app: Router) {
	return (pathName: string) => {
		const facultyROuter = Router();
		app.use(`${pathName}`, facultyROuter);
		facultyROuter.post('/new', createFacultyController);
	};
}
