/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { editFacultyController } from '../controllers';

export function updateFacultyRoute(app: Router) {
	return (pathName: string) => {
		const facultyROuter = Router();
		app.use(`${pathName}`, facultyROuter);
		facultyROuter.put('/update/:id', editFacultyController);
	};
}
