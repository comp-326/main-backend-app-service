/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import UserController from '@exam-cell-features/users/controllers';
import UserRepository from '@exam-cell-features/users/repository';
import { UserUseCase } from '@exam-cell-features/users/use-cases';
import { imageUpload } from '@exam-cell-uploader';
import { loginRequired } from '@exam-cell-middlewares/Auth';

export default function updateProfilePicRoute(app: Router){
	return (pathName: string) => {
		const userUseCase = new UserUseCase(UserRepository);
		const controller = new UserController(userUseCase);
		const userRouter = Router();
		app.use(`${pathName}`, userRouter);
		userRouter.put('/account/profile/avatar/:id', loginRequired,imageUpload.single('avatar'),controller.updateProfilePic);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	};
}