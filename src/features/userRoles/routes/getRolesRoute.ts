/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { UserRoleController } from '@exam-cell-features/userRoles/controllers';
import { UserRoleUseCases } from '@exam-cell-features/userRoles/use-cases';
import userRolesRepository from '@exam-cell-features/userRoles/repository';


export default function getUserRolesRoute(app: Router){
	return (pathName: string) => {
		const userRolesUseCase = new UserRoleUseCases(userRolesRepository);
		const controller = new UserRoleController(userRolesUseCase);
		const folderRouter = Router();
		app.use(`${pathName}`, folderRouter);
		folderRouter.get('/all',controller.getRoles);

	};
}