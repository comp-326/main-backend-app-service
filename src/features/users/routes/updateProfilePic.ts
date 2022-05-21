/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import UserController from '@backend-service-features/users/controllers';
import UserRepository from '@backend-service-features/users/repository';
import { UserUseCase } from '@backend-service-features/users/use-cases';
import { imageUpload } from '@backend-service-uploader';
import { loginRequired } from '@backend-service/middlewares/Auth';

export default function updateProfilePicRoute(app: Router){
	return (pathName: string) => {
		const userUseCase = new UserUseCase(UserRepository);
		const controller = new UserController(userUseCase);
		const userRouter = Router();
		app.use(`${pathName}`, userRouter);
		userRouter.put('/account/profile/avatar/:id', loginRequired,imageUpload.single('avatar'),controller.updateProfilePic);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	};
}