import { Router } from 'express';
import { deleteStudentRoute } from './routes/deleteStudentRoute';
import { findStudentByEmailRoute } from './routes/findStudentByEmailRoute';
import { findStudentByIdRoute } from './routes/findStudentByIdRoute';
import { findStudentsRoute } from './routes/findStudentsRoute';
import { newStudentRoute } from './routes/newStudentRoute';
import { updateStudentRoute } from './routes/updateStudentRoute';

export default ({ app, pathName }: { app: Router; pathName: string }) => {
	newStudentRoute(app)(pathName);
	findStudentByEmailRoute(app)(pathName);
	findStudentByIdRoute(app)(pathName);
	findStudentsRoute(app)(pathName);
	updateStudentRoute(app)(pathName);
	deleteStudentRoute(app)(pathName);
};
