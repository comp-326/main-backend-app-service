/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { listFacultiesController } from '../controllers';

export function findFacultiesRoute(app: Router) {
	return (pathName: string) => {
		const facultyROuter = Router();
		app.use(`${pathName}`, facultyROuter);
		facultyROuter.get('/all', listFacultiesController);
	};
}
