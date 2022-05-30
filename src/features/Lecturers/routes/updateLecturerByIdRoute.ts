/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { updateLecturerController } from '../controllers';

export function updateLecturerByIdRoute(app: Router) {
	return (pathName: string) => {
		const lecturerRouter = Router();
		app.use(`${pathName}`, lecturerRouter);
		lecturerRouter.put('/update/:id', updateLecturerController);
	};
}
