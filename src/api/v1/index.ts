import { Router } from 'express';
import adminDomain from '@exam-cell-features/Admin';
import departmentDomain from '@exam-cell-features/Department';
import facultyDomain from '@exam-cell-features/Faculty';
import testRoute from './testRoute';
import { swaggerServe, swaggerSetup } from '@exam-cell-utils/docs';

const apiRoute = Router();

export default function () {
	apiRoute.get('/test', testRoute);
	apiRoute.use('/docs', swaggerServe, swaggerSetup);
	adminDomain({ app: apiRoute, pathName: '/admin' });
	facultyDomain({ app: apiRoute, pathName: '/faculty' });
	departmentDomain({ app: apiRoute, pathName: '/department' });

	return apiRoute;
}
