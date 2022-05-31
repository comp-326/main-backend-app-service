/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { deleteUnitByIdController } from '../controllers';

export default function deleteUnitRoute(app: Router) {
	return (pathName: string) => {
		const unitRouter = Router();
		app.use(`${pathName}`, unitRouter);
		unitRouter.delete('/delete/:id', deleteUnitByIdController);
	};
}
