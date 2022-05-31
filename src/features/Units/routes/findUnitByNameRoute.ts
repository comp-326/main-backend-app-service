/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findUnitByNameController } from '../controllers';

export default function findUnitByNameRoute(app: Router) {
	return (pathName: string) => {
		const unitRouter = Router();
		app.use(`${pathName}`, unitRouter);
		unitRouter.get('/name/find', findUnitByNameController);
	};
}
