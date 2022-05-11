/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUserRoleDocument } from '@backend-service-features/userRoles/models/interfaces';
import { INext, IRequest, IResponse } from '@backend-service-common/types';

export interface IUserRoleUseCase {
	addRoles: () => Promise<IUserRoleDocument[] | IUserRoleDocument|null>
	listRoles: () => Promise<IUserRoleDocument[] | IUserRoleDocument|null>
}

export interface IUserRoleRepository {
	findByName: (name: string) => Promise<IUserRoleDocument|null>
	createRoles: () => Promise<IUserRoleDocument | IUserRoleDocument[]>
	findRoles: () => Promise<IUserRoleDocument | IUserRoleDocument[]|null>
}

export interface IUserRoleController {
	createRoles: (req: IRequest, res: IResponse, next: INext) => Promise<any>
	getRoles: (req: IRequest, res: IResponse, next: INext) => Promise<any>
}