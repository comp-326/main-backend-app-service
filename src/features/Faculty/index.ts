import { Router } from 'express';
import { findFacultiesRoute } from './routes/findFacultiesRoute';
import { findFacultyByIdRoute } from './routes/findFacultyByIdRoute';
import { findFacultyByNameRoute } from './routes/findFacultyByName';
import { newFacultyRoute } from './routes/newFacultyRoute';
import { updateFacultyRoute } from './routes/updateFacultyRoute';

export default ({ app, pathName }: { app: Router; pathName: string }) => {
	newFacultyRoute(app)(pathName);
	findFacultyByIdRoute(app)(pathName);
	updateFacultyRoute(app)(pathName);
	findFacultiesRoute(app)(pathName);
	findFacultyByNameRoute(app)(pathName);
};
