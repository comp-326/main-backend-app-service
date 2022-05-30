/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getLecturerByEmailController } from '../controllers';

export function getLecturerByEmailRoute(app: Router) {
	return (pathName: string) => {
		const lecturerRouter = Router();
		app.use(`${pathName}`, lecturerRouter);
		lecturerRouter.get('/email/find', getLecturerByEmailController);
	};
}
