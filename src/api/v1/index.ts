import { Router } from 'express';
import admin from '@exam-cell-features/Admin';
import course from '@exam-cell-features/Course';
import department from '@exam-cell-features/Department';
import faculty from '@exam-cell-features/Faculty';
import lecturer from '@exam-cell-features/Lecturers';
import mpesa from '@exam-cell-features/mpesa';
import student from '@exam-cell-features/Students';
import testRoute from './testRoute';
import unit from '@exam-cell-features/Units';
import { swaggerServe, swaggerSetup } from '@exam-cell-utils/docs';

export default function () {
	const apiRoute = Router();
	apiRoute.get('/test', testRoute);
	apiRoute.use('/docs', swaggerServe, swaggerSetup);
	admin({ app: apiRoute, pathName: '/admin' });
	course({ app: apiRoute, pathName: '/courses' });
	faculty({ app: apiRoute, pathName: '/faculty' });
	department({ app: apiRoute, pathName: '/departments' });
	student({ app: apiRoute, pathName: '/students' });
	lecturer({ app: apiRoute, pathName: '/lecturers' });
	unit({ app: apiRoute, pathName: '/units' });
	mpesa({ app: apiRoute, pathName: '/mpesa' });

	return apiRoute;
}
