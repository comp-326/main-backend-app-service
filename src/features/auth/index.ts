import { Router } from 'express';
import loginUserRoute from './routes/loginUserRoute';
import logoutUserRoue from './routes/logoutUserRoue';
export default ({ app, pathName }: { app: Router, pathName: string }) => {
	loginUserRoute(app)(pathName);
	logoutUserRoue(app)(pathName);
};