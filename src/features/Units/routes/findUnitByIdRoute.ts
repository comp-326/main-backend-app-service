/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findUnitByIdController } from '../controllers';

export default function findUnitByIdRoute(app: Router) {
	return (pathName: string) => {
		const unitRouter = Router();
		app.use(`${pathName}`, unitRouter);
		unitRouter.get('/unit/:id', findUnitByIdController);
	};
}
