/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import UserController from '../controllers';
import UserRepository from '../repository';
import { UserUseCase } from '../use-cases';


export default function forgotPasswordRoute(app:Router){
	return (pathName:string)=>{
		const userUseCase = new UserUseCase(UserRepository);
		const controller = new UserController(userUseCase);
		const userRouter = Router();
		app.use(`${pathName}`,userRouter);
		userRouter.get('/account/password/forgot',controller.getPasswordResetLink);

	};
}