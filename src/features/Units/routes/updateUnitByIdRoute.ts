/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { updateUnitController } from '../controllers';

export default function updateUnitByIdRoute(app: Router) {
	return (pathName: string) => {
		const unitRouter = Router();
		app.use(`${pathName}`, unitRouter);
		unitRouter.put('/update/:id', updateUnitController);
	};
}
