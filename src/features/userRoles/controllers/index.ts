/* eslint-disable @typescript-eslint/no-unused-vars */
import { INext, IRequest, IResponse } from '@backend-service-common/types';
import { IUserRoleController, IUserRoleUseCase } from './../interfaces';

export class UserRoleController implements IUserRoleController{
	private readonly useCase: IUserRoleUseCase;

	constructor(useCase: IUserRoleUseCase){
		this.useCase = useCase;
	}

	createRoles = async (req: IRequest, res: IResponse, next: INext) => {
		const response = await this.useCase.addRoles();

		return res.status(201).json({ data: response });
	};

	getRoles = async (req: IRequest, res: IResponse, next: INext) => {
		const response = await this.useCase.listRoles();

		return res.status(200).json({ data: response });
	};

}