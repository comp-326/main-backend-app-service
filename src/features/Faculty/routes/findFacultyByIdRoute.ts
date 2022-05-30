/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { listFacultyByIdController } from '../controllers';

export function findFacultyByIdRoute(app: Router) {
	return (pathName: string) => {
		const facultyROuter = Router();
		app.use(`${pathName}`, facultyROuter);
		facultyROuter.get('/find/id/:id', listFacultyByIdController);
	};
}
