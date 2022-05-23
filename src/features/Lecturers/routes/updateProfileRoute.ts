/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import UserController from '../controllers';
import UserRepository from '../repository';
import { UserUseCase } from '../use-cases';
import { loginRequired } from '@exam-cell-middlewares/Auth';

export default function updateAccountRoute(app: Router){
	return (pathName: string) => {
		const userUseCase = new UserUseCase(UserRepository);
		const controller = new UserController(userUseCase);
		const userRouter = Router();
		app.use(`${pathName}`, userRouter);
		userRouter.put('/account/profile/update/:id', loginRequired, controller.updateAccount);
	};
}
