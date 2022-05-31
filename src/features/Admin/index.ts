import { Router } from 'express';
import { deleteAdminByIdRoute } from './routes/deleteAdminByIdRoute';
import { getAdminByEmailRoute } from './routes/getAdminByEmail';
import { getAdminByIdRoute } from './routes/getAdminByIdRoute';
import { getAdminsRoute } from './routes/getAdminssRoute';
import { newStudentRoute } from './routes/newAdminRoute';
import { updateAdminByIdRoute } from './routes/updateAdminByIdRoute';

export default ({ app, pathName }: { app: Router; pathName: string }) => {
	newStudentRoute(app)(pathName);
	deleteAdminByIdRoute(app)(pathName);
	getAdminByEmailRoute(app)(pathName);
	getAdminByIdRoute(app)(pathName);
	getAdminsRoute(app)(pathName);
	updateAdminByIdRoute(app)(pathName);
};
