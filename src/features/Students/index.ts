import { Router } from 'express';
import { newStudentRoute } from './routes/newStudentRoute';

export default ({ app, pathName }: { app: Router; pathName: string }) => {
	newStudentRoute(app)(pathName);
};
