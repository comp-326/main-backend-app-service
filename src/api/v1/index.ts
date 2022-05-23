import { Router } from 'express';
import authDomain from '@exam-cell-features/auth';
import testRoute from './testRoute';
import userDomain from '@exam-cell-features/users';
import userRolesDomain from '@exam-cell-features/userRoles';
import { swaggerServe, swaggerSetup } from '@exam-cell-utils/docs';

const apiRoute = Router();

export default function () {
	apiRoute.get('/test', testRoute);
	apiRoute.use('/docs', swaggerServe, swaggerSetup);
	userDomain({ app: apiRoute, pathName: '/users' });
	userRolesDomain({ app: apiRoute, pathName: '/u-roles' });
	authDomain({app:apiRoute,pathName:'/auth'});

	return apiRoute;
}
