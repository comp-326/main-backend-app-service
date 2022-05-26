import { Router } from 'express';
import loginUserRoute from './routes/loginUserRoute';
import logoutUserRoute from './routes/logoutUserRoute';

export default ({ app, pathName }: { app: Router, pathName: string }) => {
	loginUserRoute(app)(pathName);
	logoutUserRoute(app)(pathName);
};