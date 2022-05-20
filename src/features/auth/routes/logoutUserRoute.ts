/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthController } from '../controllers';
import { AuthUseCase } from '../use-cases';
import { Router } from 'express';
import authRepository from '../repository';
import { loginRequired } from '@backend-service/middlewares/Auth';

export default function logoutUserRoute(app: Router) {
	return (pathName: string) => {
		const authUseCase = new AuthUseCase(authRepository);
		const controller = new AuthController(authUseCase);
		const userRouter = Router();
		app.use(`${pathName}`, userRouter);
		userRouter.post('/logout', loginRequired, controller.logout);

	};
}