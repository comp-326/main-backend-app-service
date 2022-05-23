import { IUserRoleRepository } from '@exam-cell-features/userRoles/interfaces';

export function makeAddRoles({
	repository,
}: {
	repository: IUserRoleRepository,
}) {
	return async () => {
		const roles = await repository.findRoles();

		return roles;
	};
}
