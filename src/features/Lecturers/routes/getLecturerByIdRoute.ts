/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getLecturerByIdController } from '../controllers';

export function getLecturerByIdRoute(app: Router) {
	return (pathName: string) => {
		const lecturerRouter = Router();
		app.use(`${pathName}`, lecturerRouter);
		lecturerRouter.get('/lecturer/:id', getLecturerByIdController);
	};
}
