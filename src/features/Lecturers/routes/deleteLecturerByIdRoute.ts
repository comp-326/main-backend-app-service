/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { deleteLecturerByIdController } from '../controllers';

export function deleteLecturerByIdRoute(app: Router) {
	return (pathName: string) => {
		const lecturerRouter = Router();
		app.use(`${pathName}`, lecturerRouter);
		lecturerRouter.delete(
			'/lecturer/delete/:id',
			deleteLecturerByIdController,
		);
	};
}
