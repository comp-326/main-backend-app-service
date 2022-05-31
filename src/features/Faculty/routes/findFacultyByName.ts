/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { listFacultyByNameController } from '../controllers';

export function findFacultyByNameRoute(app: Router) {
	return (pathName: string) => {
		const facultyROuter = Router();
		app.use(`${pathName}`, facultyROuter);
		facultyROuter.get('/name/find', listFacultyByNameController);
	};
}
