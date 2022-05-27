import { Router } from 'express';
import newUnitRoute from './routes/newUnitRoute';

export default ({ app, pathName }: { app: Router; pathName: string }) => {
	newUnitRoute(app)(pathName);
};
