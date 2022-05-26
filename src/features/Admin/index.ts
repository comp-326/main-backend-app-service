import { Router } from 'express';
import { newAdminRoute } from './routes/newAdminRoute';


export default ({ app, pathName }: { app: Router, pathName: string }) => {
	newAdminRoute(app)(pathName);
};