import { Router } from 'express';
import adminDomain from '@exam-cell-features/Admin';
import testRoute from './testRoute';
import { swaggerServe, swaggerSetup } from '@exam-cell-utils/docs';

const apiRoute = Router();

export default function () {
	apiRoute.get('/test', testRoute);
	apiRoute.use('/docs', swaggerServe, swaggerSetup);
	adminDomain({ app: apiRoute, pathName: '/admin' });

	return apiRoute;
}
