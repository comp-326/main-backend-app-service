import { IUserRoleRepository, IUserRoleUseCase } from '@backend-service-features/userRoles/interfaces';

export class UserRoleUseCases implements IUserRoleUseCase{
	private readonly repository: IUserRoleRepository;

	constructor(repository: IUserRoleRepository){
		this.repository = repository;
	}

	addRoles = async () => {
		const roles = await this.repository.createRoles();

		return roles;
	};

	listRoles = async () => {
		const roles = await this.repository.findRoles();

		return roles;
	};

}
