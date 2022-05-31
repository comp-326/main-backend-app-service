/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { createNewUnitController } from '../controllers';

export default function addUnitRoute(app: Router) {
	return (pathName: string) => {
		const unitRouter = Router();
		app.use(`${pathName}`, unitRouter);
		unitRouter.post('/new', createNewUnitController);
	};
}
