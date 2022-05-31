import { Router } from 'express';
import getCourseByDepartmentRoute from './routes/getCourseByDepartmentRoute';
import getCourseByIdRoute from './routes/getCourseByIdRoute';
import getCourseByNameRoute from './routes/getCourseByNameRoute';
import getCoursesRoute from './routes/getCoursesRoute';
import newCourseRoute from './routes/newCourseRoute';
import updateCourseRoute from './routes/updateCourseRoute';

export default ({ app, pathName }: { app: Router; pathName: string }) => {
	newCourseRoute(app)(pathName);
	getCourseByDepartmentRoute(app)(pathName);
	getCourseByIdRoute(app)(pathName);
	getCourseByNameRoute(app)(pathName);
	getCoursesRoute(app)(pathName);
	updateCourseRoute(app)(pathName);
};
