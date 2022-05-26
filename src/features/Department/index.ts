import { Router } from 'express';
import newDepartmentRoute from './routes/newDepartmentRoute';

export default ({ app, pathName }: { app: Router; pathName: string }) => {
	newDepartmentRoute(app)(pathName);
};
