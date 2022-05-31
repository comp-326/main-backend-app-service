import { Router } from 'express';
import addUnitRoute from './routes/addUnitRoute';
import deleteUnitRoute from './routes/deleteUnitRoute';
import findUnitByIdRoute from './routes/findUnitByIdRoute';
import findUnitByNameRoute from './routes/findUnitByNameRoute';
import findUnitsRoute from './routes/findUnitsRoute';
import updateUnitByIdRoute from './routes/updateUnitByIdRoute';

export default ({ app, pathName }: { app: Router; pathName: string }) => {
	addUnitRoute(app)(pathName);
	deleteUnitRoute(app)(pathName);
	findUnitByIdRoute(app)(pathName);
	findUnitByNameRoute(app)(pathName);
	findUnitsRoute(app)(pathName);
	updateUnitByIdRoute(app)(pathName);
};
