import { Router } from 'express';
import newCourseRoute from './routes/newCourseRoute';

export default ({ app, pathName }: { app: Router; pathName: string }) => {
	newCourseRoute(app)(pathName);
};
