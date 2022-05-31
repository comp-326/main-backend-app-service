import { Router } from 'express';
import { deleteLecturerByIdRoute } from './routes/deleteLecturerByIdRoute';
import { getLecturerByEmailRoute } from './routes/getLecturerByEmail';
import { getLecturerByIdRoute } from './routes/getLecturerByIdRoute';
import { getLecturersRoute } from './routes/getLecturersRoute';
import { newStudentRoute } from './routes/newStudentRoute';
import { updateLecturerByIdRoute } from './routes/updateLecturerByIdRoute';

export default ({ app, pathName }: { app: Router; pathName: string }) => {
	newStudentRoute(app)(pathName);
	deleteLecturerByIdRoute(app)(pathName);
	getLecturerByEmailRoute(app)(pathName);
	getLecturerByIdRoute(app)(pathName);
	getLecturersRoute(app)(pathName);
	updateLecturerByIdRoute(app)(pathName);
};
