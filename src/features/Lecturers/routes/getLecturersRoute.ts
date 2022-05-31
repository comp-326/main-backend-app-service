/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { getLecturersController } from '../controllers';

export function getLecturersRoute(app: Router) {
	return (pathName: string) => {
		const lecturerRouter = Router();
		app.use(`${pathName}`, lecturerRouter);
		lecturerRouter.get('/all', getLecturersController);
	};
}
