/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { UserRoleController } from '@backend-service-features/userRoles/controllers';
import { UserRoleUseCases } from '@backend-service-features/userRoles/use-cases';
import { adminRequired } from '@backend-service/middlewares/Auth';
import userRolesRepository from '@backend-service-features/userRoles/repository';


export default function getUserRolesRoute(app: Router){
	return (pathName: string) => {
		const userRolesUseCase = new UserRoleUseCases(userRolesRepository);
		const controller = new UserRoleController(userRolesUseCase);
		const folderRouter = Router();
		app.use(`${pathName}`, folderRouter);
		folderRouter.get('/all', adminRequired,controller.getRoles);

	};
}