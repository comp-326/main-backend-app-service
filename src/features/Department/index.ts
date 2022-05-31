import { Router } from 'express';
import { deleteDepartmentRoute } from './routes/deleteDepartmentRoute';
import { findDepartmentByIdRoute } from './routes/findDepartmentByIdRoute';
import { findDepartmentByNameRoute } from './routes/findDepartmentNameRoute';
import { findDepartmentsRoute } from './routes/findDepartmentsRoute';
import { newDepartmentRoute } from './routes/newDepartmentRoute';
import { updateDepartmentRoute } from './routes/updateDepartmentRoute';

export default ({ app, pathName }: { app: Router; pathName: string }) => {
	newDepartmentRoute(app)(pathName);
	deleteDepartmentRoute(app)(pathName);
	findDepartmentByNameRoute(app)(pathName);
	findDepartmentByIdRoute(app)(pathName);
	findDepartmentsRoute(app)(pathName);
	updateDepartmentRoute(app)(pathName);
};
