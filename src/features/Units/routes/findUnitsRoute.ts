/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findUnitsController } from '../controllers';

export default function findUnitsRoute(app: Router) {
	return (pathName: string) => {
		const unitRouter = Router();
		app.use(`${pathName}`, unitRouter);
		unitRouter.get('/all', findUnitsController);
	};
}
