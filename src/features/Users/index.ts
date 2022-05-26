import { Router } from 'express';
import activateAccountRoute from './routes/activateAccountRoute';
import deleteAccountRoute from './routes/deleteUserRoute';
import forgotPasswordRoute from './routes/forgotPasswordRoute';
import getActivationLinkRoute from './routes/getActivationLinkRoute';
import getUserByEmailRoute from './routes/getUserByEmailRoute';
import getUserByIdRoute from './routes/getUserByIdRoute';
import getUsersRoute from './routes/getUsersRoute';
import newUserRoute from './routes/newUserRoute';
import resetPasswordRoute from './routes/resetPasswordRoute';
import updateProfilePic from './routes/updateProfilePic';
import updateProfileRoute from './routes/updateProfileRoute';


export default ({app,pathName}:{app:Router,pathName:string})=>{
	activateAccountRoute(app)(pathName);
	deleteAccountRoute(app)(pathName);
	forgotPasswordRoute(app)(pathName);
	getActivationLinkRoute(app)(pathName);
	getUserByEmailRoute(app)(pathName);
	getUserByIdRoute(app)(pathName);
	getUsersRoute(app)(pathName);
	newUserRoute(app)(pathName);
	resetPasswordRoute(app)(pathName);
	updateProfilePic(app)(pathName);
	updateProfileRoute(app)(pathName);
};