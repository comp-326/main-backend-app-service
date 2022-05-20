import { Router } from 'express';
import authDomain from '@backend-service/features/auth';
import testRoute from './testRoute';
import userDomain from '@backend-service/features/users';
import userRolesDomain from '@backend-service/features/userRoles';
import { swaggerServe, swaggerSetup } from '@backend-service/utils/docs';

const apiRoute = Router();

export default function () {
	apiRoute.get('/test', testRoute);
	apiRoute.use('/docs', swaggerServe, swaggerSetup);
	userDomain({ app: apiRoute, pathName: '/users' });
	userRolesDomain({ app: apiRoute, pathName: '/u-roles' });
	authDomain({app:apiRoute,pathName:'/auth'});

	return apiRoute;
}
