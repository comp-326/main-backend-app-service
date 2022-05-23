/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import UserController from '../controllers';
import UserRepository from '../repository';
import { UserUseCase } from '../use-cases';
import { adminRequired } from '@exam-cell-middlewares/Auth';


export default function deleteAccountRoute(app:Router){
	return (pathName:string)=>{
		const userUseCase = new UserUseCase(UserRepository);
		const controller = new UserController(userUseCase);
		const userRouter = Router();
		app.use(`${pathName}`,userRouter);
		userRouter.get('/account/delete/:id',adminRequired,controller.softDeleteUser);

	};
}