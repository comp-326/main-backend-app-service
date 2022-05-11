import { Router } from 'express';
import getUserRolesRoute from './routes/getRolesRoute';
import postNewRolesRoute from './routes/postNewRolesRoute';
export default ({ app, pathName }: { app: Router, pathName: string }) => {
	getUserRolesRoute(app)(pathName);
	postNewRolesRoute(app)(pathName);
};