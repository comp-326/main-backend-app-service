import { Router } from 'express';
import { newFacultyRoute } from './routes/newFacultyRoute';


export default ({ app, pathName }: { app: Router, pathName: string }) => {
	newFacultyRoute(app)(pathName);
};